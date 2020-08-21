<template>
  <div class="container">
    <pre>
      {{selectedOption}}
    </pre>
    <list :options="options" @itemSelected="onOptionSelect">
      <template slot="item" slot-scope="option">
        <span>
          <img :src="option.thumbnail" />
        </span>
      </template>
    </list>
  </div>
</template>

<script>
import List from "@/components/List";

export default {
  name: "App",

  components: {
    List,
  },
  methods: {
    onOptionSelect(option) {
      this.selectedOption = option
    }
  },

  data: () => ({
    selectedOption: "{}",
    options: [
      {
        id: 1,
        name: "Thea",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 2,
        name: "Frederico",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 3,
        name: "Rudd",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 4,
        name: "Clemmie",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 5,
        name: "Marshall",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 6,
        name: "Leigh",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 7,
        name: "Curcio",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 8,
        name: "Rochester",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 9,
        name: "Reilly",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 10,
        name: "Darin",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 11,
        name: "Lock",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 12,
        name: "Shurlocke",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 13,
        name: "Kalinda",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 14,
        name: "Florida",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 15,
        name: "Bobby",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 16,
        name: "Agosto",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 17,
        name: "Corby",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 18,
        name: "Laural",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 19,
        name: "Veradis",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 20,
        name: "Anthea",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 21,
        name: "Mathian",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 22,
        name: "Jere",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 23,
        name: "Marcela",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 24,
        name: "Libbi",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 25,
        name: "Glenine",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 26,
        name: "Wilburt",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 27,
        name: "Rabbi",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 28,
        name: "Min",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 29,
        name: "Rosalynd",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 30,
        name: "Nataline",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 31,
        name: "Danika",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 32,
        name: "Adams",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 33,
        name: "Blythe",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 34,
        name: "Pietra",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 35,
        name: "Althea",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 36,
        name: "Joni",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 37,
        name: "Morissa",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 38,
        name: "Allard",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 39,
        name: "Kylen",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 40,
        name: "Pearce",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 41,
        name: "Irwin",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 42,
        name: "Isidoro",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 43,
        name: "Zelig",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 44,
        name: "Alexine",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 45,
        name: "Sibilla",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 46,
        name: "Cynthea",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 47,
        name: "Melisa",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 48,
        name: "Ibby",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 49,
        name: "Godwin",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 50,
        name: "Tristam",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 51,
        name: "Kalli",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 52,
        name: "Douglass",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 53,
        name: "Oates",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 54,
        name: "Hollie",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 55,
        name: "Rivy",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 56,
        name: "Hanna",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 57,
        name: "Neely",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 58,
        name: "Christophorus",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 59,
        name: "Jessamine",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 60,
        name: "Allys",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 61,
        name: "Domenico",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 62,
        name: "Cathy",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 63,
        name: "Francisca",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 64,
        name: "Olympia",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 65,
        name: "Brigida",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 66,
        name: "Merrily",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 67,
        name: "Ignazio",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 68,
        name: "Tobye",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 69,
        name: "Joannes",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 70,
        name: "Chandal",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 71,
        name: "Jannel",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 72,
        name: "Rozella",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 73,
        name: "Wallie",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 74,
        name: "Dominic",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 75,
        name: "Sollie",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 76,
        name: "Wit",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 77,
        name: "Glenden",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 78,
        name: "Alphard",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 79,
        name: "Kimberli",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 80,
        name: "Thurstan",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 81,
        name: "Cloris",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 82,
        name: "Yorke",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 83,
        name: "Garland",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 84,
        name: "Candie",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 85,
        name: "Rikki",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 86,
        name: "Forrester",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 87,
        name: "Waldon",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 88,
        name: "Sissie",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 89,
        name: "Audrey",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 90,
        name: "Briana",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 91,
        name: "Rosabella",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 92,
        name: "Nerita",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 93,
        name: "Joete",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 94,
        name: "Brett",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 95,
        name: "Jackqueline",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 96,
        name: "Burnaby",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 97,
        name: "Konstance",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 98,
        name: "Margarete",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 99,
        name: "Audra",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 100,
        name: "Finlay",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 101,
        name: "Tilda",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 102,
        name: "Bartholomeus",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 103,
        name: "Emanuel",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 104,
        name: "Mufinella",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 105,
        name: "Tatiania",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 106,
        name: "Bevin",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 107,
        name: "Phineas",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 108,
        name: "Caty",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 109,
        name: "Remington",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 110,
        name: "Jessika",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 111,
        name: "Sheba",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 112,
        name: "Jephthah",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 113,
        name: "Iseabal",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 114,
        name: "Ethel",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 115,
        name: "Molly",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 116,
        name: "Jolyn",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 117,
        name: "Heda",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 118,
        name: "Kingsly",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 119,
        name: "Grace",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 120,
        name: "Neddie",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 121,
        name: "Eldon",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 122,
        name: "Marcile",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 123,
        name: "Cody",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 124,
        name: "Dynah",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 125,
        name: "Herb",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 126,
        name: "Berny",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 127,
        name: "Chrisse",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 128,
        name: "Christa",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 129,
        name: "Janela",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 130,
        name: "Penelope",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 131,
        name: "Ced",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 132,
        name: "Elvyn",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 133,
        name: "Elmira",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 134,
        name: "Kylen",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 135,
        name: "Ignaz",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 136,
        name: "Sally",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 137,
        name: "Douglas",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 138,
        name: "Antonin",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 139,
        name: "Jethro",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 140,
        name: "Ruddie",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 141,
        name: "Lancelot",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 142,
        name: "Marietta",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 143,
        name: "Wallache",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 144,
        name: "Claresta",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 145,
        name: "Kaitlin",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 146,
        name: "Sauncho",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 147,
        name: "Nickie",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 148,
        name: "Geri",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 149,
        name: "Kellie",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 150,
        name: "Robbyn",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 151,
        name: "Guthrie",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 152,
        name: "Pincus",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 153,
        name: "Page",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 154,
        name: "Ofilia",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 155,
        name: "Retha",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 156,
        name: "Tabbitha",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 157,
        name: "Costa",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 158,
        name: "Jazmin",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 159,
        name: "Maxi",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 160,
        name: "Fulvia",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 161,
        name: "Othello",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 162,
        name: "Debera",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 163,
        name: "Easter",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 164,
        name: "Shaine",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 165,
        name: "Gusti",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 166,
        name: "Brose",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 167,
        name: "Elane",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 168,
        name: "Josey",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 169,
        name: "Vinni",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 170,
        name: "Reade",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 171,
        name: "Albina",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 172,
        name: "Urbain",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 173,
        name: "Sean",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 174,
        name: "Lorry",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 175,
        name: "Bev",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 176,
        name: "Debra",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 177,
        name: "Martino",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 178,
        name: "Jonis",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 179,
        name: "Marion",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 180,
        name: "Maurizio",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 181,
        name: "Randie",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 182,
        name: "Gideon",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 183,
        name: "Adelheid",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 184,
        name: "Karlotte",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 185,
        name: "Munmro",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 186,
        name: "Glennis",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 187,
        name: "Fancy",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 188,
        name: "Mirelle",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 189,
        name: "Liva",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 190,
        name: "Kiley",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 191,
        name: "Alane",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 192,
        name: "Annnora",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 193,
        name: "Kinny",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 194,
        name: "Jesus",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 195,
        name: "Coleen",
        thumbnail: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
      },
      {
        id: 196,
        name: "Marylou",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 197,
        name: "Christoforo",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
      {
        id: 198,
        name: "Dix",
        thumbnail: "http://dummyimage.com/50x50.png/ff4444/ffffff",
      },
      {
        id: 199,
        name: "Micky",
        thumbnail: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      },
      {
        id: 200,
        name: "Verene",
        thumbnail: "http://dummyimage.com/50x50.png/dddddd/000000",
      },
    ],
  }),
};
</script>

<style>
html,
body {
  background: #eee;
  font-family: Proxima;
}
@font-face {
  font-family: Proxima;
  src: url(assets/fonts/ProximaNova-Regular.woff) format("woff"),
    url(assets/fonts/ProximaNova-Regular.ttf) format("truetype");
  font-weight: 400;
  font-style: normal;
}
.container{
  width: 400px;
  margin: 0 auto;
}
pre {
  position: absolute;
  top: 0;
  background: #999;
  border-radius: 5px;
  padding: 20px;
  width: 360px;
  white-space: normal;
}
</style>
