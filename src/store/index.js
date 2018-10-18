import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    loading: false
  },
  actions: {},
  mutations: {
    setLoading(state) {
      state.loading = !state.loading;
    }
  },
  getters: {}
});

export default store;
