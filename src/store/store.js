import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    form: {
      firstName: "",
      lastName: "",
      email: "",
    },
    sectionThree: [
      {
        title: "Friday",
        counter: 0,
      },
      {
        title: "Saturday",
        counter: 0,
      },
      {
        title: "Sunday",
        counter: 0,
      },
    ],
    sectionFour: [
      {
        image:
          "https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-468.jpg",
        counter: 0,
      },
      {
        image:
          "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-436.jpg",
        counter: 0,
      },
      {
        image:
          "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-435.jpg",
        counter: 0,
      },
    ],
    sectionFive: [
      {
        message: "Enter your ",
      },
    ],

    message: "",

    showModal: false,
    selectedIndex: null,
    newPerson: {
      firstName: "",
      lastName: "",
      edit: false,
    },
    id: "ID",
    firstName: "First Name",
    lastName: "Last Name",
    persons: [
      {
        id: 1,
        firstName: "Riste",
        lastName: "Kapsarov",
        edit: false,
      },
      {
        id: 2,
        firstName: "Charles",
        lastName: "Leclerc",
        edit: false,
      },
      {
        id: 3,
        firstName: "Tony",
        lastName: "Parker",
        edit: false,
      },
      {
        id: 4,
        firstName: "Mick",
        lastName: "Schumacher",
        edit: false,
      },
      {
        id: 5,
        firstName: "Shekel",
        lastName: "O'neal",
        edit: false,
      },
      {
        id: 6,
        firstName: "Koby",
        lastName: "Braynt",
        edit: false,
      },
    ],
  },
  actions,
  mutations,
  getters,
});
export default store;
