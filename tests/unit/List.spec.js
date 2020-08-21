import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'

const mockItems = [{
  id: 1,
  name: "Thea",
  thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
},
{
  id: 2,
  name: "Frederico",
  thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
}]

function createShallowMount() {
  return shallowMount(List, {
    propsData: {
      options: mockItems
    },
  })
}

describe('List testing', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = createShallowMount()
  })
  afterEach(() => {
    wrapper.destroy()
  })

  it('props rendered when passed', () => {
    expect(wrapper.find("li").text()).toBe("Thea")
    expect(wrapper.find("li").text()).not.toBe("Qwerty")
    expect(wrapper.findAll('li')).toHaveLength(mockItems.length)
  })


  it("search result rendered", async () => {
    await wrapper.find(".input-dropdown").setValue("der")
    expect(wrapper.find("li").text()).toBe("Frederico")
  })

  it("clear input works", async () => {
    await wrapper.find(".input-dropdown").setValue("der")
    await wrapper.find(".close").trigger("click")
    expect(wrapper.find(".input-dropdown").text()).toBe("")
  })

  it('keydowns arrows/enter testing', async () => {
    const input = wrapper.find('input')
    input.element.value = 'e'
    await input.trigger('input')
    await input.trigger('keydown.down')
    await input.trigger('keydown.down')
    await input.trigger('keyup.enter')
    expect(wrapper.vm.search)
      .toMatch("Frederico")
  })

  it('list dropdowns', () => {
    wrapper.find('.chevron').trigger('click')
    expect(wrapper.vm.isOpened).toBeTruthy()
  })

  it('event emitted', async () => {
    wrapper.vm.selected = 1
    wrapper.vm.select()
    expect(wrapper.vm.isOpened).toBeFalsy()
    expect(wrapper.vm.page).toBe(1)
    expect(wrapper.emitted().itemSelected.length).toBe(1)
    wrapper.vm.discardSelection()
    expect(wrapper.vm.search).toMatch("")
    expect(wrapper.vm.page).toBe(1)
  })
})
