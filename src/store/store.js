import { createStore } from 'vuex';
import counter from './modules/counter';
import auth from './modules/auth';

const DEFAULT_STATE = {
  message: null,
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
    setMessage(state, message) {
      console.log('setMessage', message);
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
      }, 5000);
    },
  },
  getters: {},
});
