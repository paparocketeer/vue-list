<template>
  <div class="autocomplete">
    <p class="control icon-right">
      <input
        type="text"
        class="input-dropdown"
        placeholder
        @input="onInput($event.target.value)"
        @keyup.enter="select"
        @keydown.down="onDown"
        @keydown.up="onUp"
        ref="dropdown"
        v-model="search"
      />

      <i
        class="chevron bottom"
        @click="toggle"
        :class="{'chevron-active' : isOpened, 'chevron-inactive' : !isOpened}"
      ></i>
      <i v-if="search.length" class="close" @click="discardSelection()"></i>
    </p>
    <transition name="fade" mode="in-out">
      <ul class="options-list" v-show="isOpened" ref="list">
        <li
          v-for="(option, i) in filteredItems"
          @mouseenter="selected = i"
          @mousedown="select"
          :class="{'selected': i === selected}"
          :key="i"
          ref="li"
        >
          {{ option.name }}
          <slot name="item" :title="option.name" :thumbnail="option.thumbnail" />
        </li>
        <trigger @triggerIntersected="page+=1" />
      </ul>
    </transition>
  </div>
</template>

<script>
import Trigger from "@/components/Trigger";
export default {
  name: "List",
  components: {
    Trigger,
  },
  data() {
    return {
      isOpened: false,
      selected: null,
      search: "",
      // selectedOption: {},
      page: 1,
      limit: 10,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onInput(value) {
      this.isOpened = !!value;
      this.selected = null;
      this.page = 1;
    },
    select() {
      let selectedOption = this.filteredItems[this.selected];
      this.$emit("itemSelected", selectedOption);
      this.search = selectedOption.name;
      this.isOpened = false;
      this.page = 1;
    },
    discardSelection() {
      this.$emit("itemSelected", "{}");
      this.search = "";
      this.page = 1;
    },
    scrollWatcher() {
      let elHeight = this.$refs.li[0].clientHeight;
      let scrollTop = this.$refs.list.scrollTop;
      let viewport =
        scrollTop + this.$refs.list.clientHeight;
      let elOffset = elHeight * this.selected;
      if (elOffset < scrollTop || elOffset + elHeight > viewport)
        this.$refs.list.scrollTop = elOffset;
    },
    onDown() {
      if (!this.isOpened) {
        return;
      }
      this.selected = (this.selected == null ? 0 : this.selected + 1) % this.filteredItems.length;
      this.scrollWatcher();
    },
    onUp() {
      if (!this.isOpened) {
        return;
      }

      this.selected =
        this.selected - 1 < 0
          ? this.filteredItems.length - 1
          : this.selected - 1;
      this.scrollWatcher();
    },
    toggle() {
      this.isOpened = !this.isOpened;
      if (this.isOpened) {
        this.$refs.dropdown.focus();
      }
    },
  },
  computed: {
    filteredItems() {
      const condition = new RegExp(this.search, "i");
      return this.options
        .filter((item) => item.name.match(condition))
        .slice(0, this.page * this.limit);
    },
  },
};
</script>

<style>
.autocomplete {
  padding-top: 4rem;
}
ul.options-list li.selected {
  background-color: #556080;
  color: #fff;
}

input.input-dropdown {
  height: 40px;
  width: 100%;
  border: 1px solid #556080;
  border-radius: 2px 0 0 2px;
  background-color: #556080;
  color: #fff;
  font-size: 16px;
  padding-right: 38px;
  padding-left: 8px;
  outline: none;
}

input.input-dropdown::-webkit-input-placeholder {
  color: #fff;
}
p.control {
  position: relative;
  display: flex;
  margin-bottom: 0.1rem;
  box-shadow: 0px 1px 5px 1px rgba(119, 119, 119, 0.53);
  z-index: 10;
}

p.control .chevron {
  width: 70px;
  top: 0;
  border: none;
  right: 0;
  color: #fff;
  background: #556080;
  box-shadow: none;
  border-radius: 0 2px 2px 0;
}

ul.options-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  max-height: 450px;
  overflow-y: auto;
  box-shadow: 0px 3px 6px 0px rgba(195, 195, 195, 0.76);
}

ul.options-list li {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  padding: 0.4rem;
  border-bottom: 1px solid #eee;
  color: #666;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s all ease;
}
.icon-right i {
  transition: 0.3s all ease;
}
.icon-right i:hover,
i.chevron.bottom.chevron-active {
  box-shadow: none;
  background-color: #556080;
}

ul.options-list li span {
  margin-right: 4px;
}

.chevron:before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: "";
  display: inline-block;
  height: 0.45em;
  left: 0.05em;
  position: relative;
  top: 0.15em;
  transform: rotate(-45deg);
  vertical-align: top;
  width: 0.45em;
  transition: 0.3s all ease;
  will-change: transform;
}

.chevron.bottom:before {
  top: 16px;
  left: 19px;
}

.chevron-active.bottom:before {
  transform: rotate(135deg);
  will-change: transform;
}

.chevron-inactive.bottom:before {
  transform: rotate(225deg);
  will-change: transform;
}

.close {
  cursor: pointer;
  right: 60px;
  top: 12px;
  color: #eee;
  position: absolute;
  width: 32px;
  height: 32px;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 20px;
  width: 4px;
  background-color: #eee;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

ul.options-list li:last-child {
  border-bottom: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  will-change: opacity;
  transform: translateY(-30px);
}
</style>