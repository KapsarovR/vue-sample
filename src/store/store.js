import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    incrementSectionThree(state, index) {
      state.sectionThree[index].counter++;
    },
    decrementSectionThree(state, index) {
      if (state.sectionThree[index].counter > 0) {
        state.sectionThree[index].counter--;
      }
    },
    incrementSectionFour(state, index) {
      state.sectionFour[index].counter++;
    },
  },
  actions: {
    incrementSectionThree({ commit }, index) {
      commit("incrementSectionThree", index);
    },
    decrementSectionThree({ commit }, index) {
      commit("decrementSectionThree", index);
    },
    incrementSectionFour({ commit }, index) {
      commit("incrementSectionFour", index);
    },
  },
  getters: {
    sectionThreeTitles(state) {
      return state.sectionThree.map(item => item.title);
    },
    sectionFourTitles(state) {
        return state.sectionFour.map(item => item.title);
      }
  }
});