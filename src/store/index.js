// store/index.js
import { createStore } from "vuex";
import VueCookies from "vue-cookies";

const store = createStore({
  state() {
    return {
      logged: false,
      page: "login",
    };
  },
  mutations: {
    SET_LOGGED(state, status) {
      state.logged = status;
    },
    SET_PAGE(state, value) {
      state.page = value;
    },
  },
  actions: {
    login({ commit }) {
      commit("SET_LOGGED", true);
      VueCookies.set("logged", true);
    },
    logout({ commit }) {
      commit("SET_LOGGED", false);
      VueCookies.set("logged", false);
    },
    currentpage({ commit }, value) {
      commit("SET_PAGE", value);
    },
  },
});

export default store;
