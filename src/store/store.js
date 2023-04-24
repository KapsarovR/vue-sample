import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    disLikes(state, number) {
      if (state.count > 0) {
        state.count -= number;
      }
    },
  },
  actions: {
    increment({ commit }, number) {
      commit("increment", number);
    },
    disLikes({ commit }, number) {
      commit("disLikes", number);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getDislikes(state) {
      return state.count;
    },
  },
});

export default store;
