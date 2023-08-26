import axios from 'axios';
import { error } from '../../js/custom/errors';

const TOKEN_KEY = 'jwt_token',
  DEFAULT_STATE = {
    token: localStorage.getItem(TOKEN_KEY),
  };

export default {
  namespaced: true,
  state() {
    return { ...DEFAULT_STATE };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(state, payload) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
  actions: {
    async login({ commit, dispatch }, payload) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true });
        commit('setToken', data.idToken);
        commit('clearMessage', null, { root: true });
      } catch (e) {
        // не зареган => предложить зарегаться через jwt_token
        dispatch(
          'setMessage',
          {
            value: error(e.response.data.error.message),
            type: 'danger',
          },
          { root: true }
        );
        // console.error('error', error(e.response.data.error.message));
        throw new Error();
      }
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuth(_, getters) {
      return !!getters.token;
    },
  },
};
