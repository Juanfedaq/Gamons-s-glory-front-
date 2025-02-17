// store/index.js
import { createStore } from "vuex";
import VueCookies from "vue-cookies";

const store = createStore({
  state() {
    return {
      logged: false,
      page: "login",
      token: null,
    };
  },
  mutations: {
    SET_LOGGED(state, status) {
      state.logged = status;
    },
    SET_PAGE(state, value) {
      state.page = value;
    },
    SET_TOKEN(state, value) {
      state.token = value;
    }
  },
  actions: {
    login({ commit }, payload) {
      commit("SET_LOGGED", true);
      commit("SET_TOKEN", payload);
      VueCookies.set("token", payload);
      VueCookies.set("logged", true);
    },
    logout({ commit }) {
      commit("SET_LOGGED", false);
      commit("SET_TOKEN", null);
      VueCookies.remove("token");
      VueCookies.set("logged", false);
    },
    currentpage({ commit }, value) {
      commit("SET_PAGE", value);
    },
  },
});

export default store;
