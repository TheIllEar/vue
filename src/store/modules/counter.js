const INITIAL_STATE = {
  count: 0,
};

export default {
  namespaced: true,
  state() {
    return { ...INITIAL_STATE };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decriment(state) {
      state.count -= 1;
    },
    set(state, payload) {
      state.count = payload.value;
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {
    changeCount({ commit }, payload) {
      commit(payload.type, payload);
    },
  },
  getters: {
    getCount(state, getters, rootState, rootGetters) {
      return state.count;
    },
  },
};
