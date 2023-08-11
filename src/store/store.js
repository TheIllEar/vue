import { createStore } from 'vuex';
import counter from './modules/counter';

export default createStore({
  state() {
    return {};
  },
  modules: {
    counter: counter,
  },
  mutations: {},
  actions: {},
  getters: {},
});
