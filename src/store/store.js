import { createStore } from 'vuex';
import counter from './modules/counter';
import auth from './modules/auth';

const DEFAULT_STATE = {
  message: null,
  loading: false,
};

export default createStore({
  state() {
    return { ...DEFAULT_STATE };
  },
  modules: {
    counter,
    auth,
  },
  mutations: {
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setMessage(state, message) {
      state.message = message;
    },
    clearMessage(state) {
      state.message = null;
    },
  },
  actions: {
    setMessage({ commit }, message) {
      commit('setMessage', message);
      setTimeout(() => {
        commit('clearMessage');
      }, 8000);
    },
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
  },
});
