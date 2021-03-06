import userApi from "../../api/userapi";
import * as ApplicationSettings from '@nativescript/core/application-settings';

// state
export const state = {
  user: ApplicationSettings.getString('user'),
  token: ApplicationSettings.getString('token'),
  isLoggedIn: ApplicationSettings.getString('token') ? true : false,
  token_id: ApplicationSettings.getNumber('token_id'),

}

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null ,
  authToken: state => state.token,
}
// mutations
export const mutations = {
  SAVE_TOKEN (state, { token, remember, user }) {
    state.token = token;
    ApplicationSettings.setString('token', token);
    ApplicationSettings.setNumber('token_id', token_id);
    ApplicationSettings.setString('user', user);
    ApplicationSettings.setBoolean('isLoggedIn', true);
    state.isLoggedIn = true;
  },

  FETCH_USER_SUCCESS (state, { user }) {
    state.user = user
  },

  FETCH_USER_FAILURE (state) {
    state.token = null
    ApplicationSettings.remove('isLoggedIn');
    state.isLoggedIn = false;

  },

  LOGOUT (state) {
    state.user = null
    ApplicationSettings.remove('isLoggedIn');
    ApplicationSettings.remove('user');
    ApplicationSettings.remove('token');
    ApplicationSettings.remove('token_id');
    state.isLoggedIn = false;
    state.token = null;
    state.authToken = null;
  },

  UPDATE_USER (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {

  async login ({ commit, dispatch }, payload) {
    try {
      // const { data } = await userApi.signin(payload)
      const res = await userApi.signin(payload);
      // console.log('this fortm',res)
      commit('SAVE_TOKEN', { token: res.user.token.plainTextToken, remember: payload.remember_me, user:res.user, token_id: res.user.token.id });
      commit('FETCH_USER_SUCCESS', { user: res.user.user });
      return res;

    } catch (err) {
      console.log('error', err);
    }
    // commit('LOGOUT')
  },

  async refresh ({ commit }) {
    try {
      const { data } = await userApi.refresh()
      commit('SAVE_TOKEN', { token: data.access_token, remember: payload.checkbox_remember_me })
    } catch (e) {
      commit('FETCH_USER_FAILURE')
    }
  },

  async fetchUser ({ commit }) {
    try {
      const res = await userApi.me();

      commit('FETCH_USER_SUCCESS', { user: res.user });
      return res;
    } catch (e) {
      commit('FETCH_USER_FAILURE');
      console.log(e);
    }
  },

  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },

  async logout ({ commit }) {
    try {
      const res = await userApi.logout();
      console.log(res);

      commit('LOGOUT')
      return false
    } catch (e) {
      console.log(e)
     }

    commit('LOGOUT')
  }
}
