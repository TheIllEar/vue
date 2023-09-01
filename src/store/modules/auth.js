import axios from 'axios';
import { error } from '../../js/custom/errors';

const TOKEN_KEY = 'jwt_token',
  SOCKET_ENDPOINT = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_SOCKET_ENDPOINT : 'https://vue-server.onrender.com',
  DEFAULT_STATE = {
    token: localStorage.getItem(TOKEN_KEY),
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    room: '',
    loginForm: true,
  };

export default {
  namespaced: true,
  state() {
    return { ...DEFAULT_STATE };
  },
  mutations: {
    changeForm(state) {
      state.loginForm = !state.loginForm;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    setUser(state, user) {
      const data = {
        id: user._id,
        name: user.username,
      };
      state.user = data;
      localStorage.setItem('user', JSON.stringify(data));
    },
    setRoom(state, room) {
      state.room = room;
    },
    clearRoom(state) {
      state.room = '';
    },
    logout(state, payload) {
      state.token = null;
      state.room = '';
      state.user = {};
      localStorage.removeItem('user');
      localStorage.removeItem(TOKEN_KEY);
    },
  },
  actions: {
    async login({ commit, dispatch }, payload) {
      try {
        const { data } = await axios.post(`${SOCKET_ENDPOINT}/auth/login`, payload);
        commit('setToken', data.token);
        commit('setUser', data.user);
        commit('clearMessage', null, { root: true });
      } catch (e) {
        dispatch(
          'setMessage',
          {
            value: error(e.response.data.error.message),
            type: 'danger',
          },
          { root: true }
        );
        throw new Error();
      }
    },
    async registration({ commit, dispatch }, payload) {
      try {
        const { data } = await axios.post(`${SOCKET_ENDPOINT}/auth/registration`, {
          username: payload.name,
          email: payload.email,
          password: payload.password,
        });
        commit('setToken', data.token);
        commit('setUser', data.user);
        commit('clearMessage', null, { root: true });
      } catch (e) {
        dispatch(
          'setMessage',
          {
            value: error(e.response.data.error.message),
            type: 'danger',
          },
          { root: true }
        );
        throw new Error();
      }
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    room(state) {
      return state.room;
    },
    user(state) {
      return state.user;
    },
    isAuth(_, getters) {
      return !!getters.token;
    },
    isLogin(state) {
      return state.loginForm;
    },
  },
};
