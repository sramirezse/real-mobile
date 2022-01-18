import userApi from "../../api/userApi";
import * as ApplicationSettings from '@nativescript/core/application-settings';

// state
export const state = {
  user: null,
  token: ApplicationSettings.getString('token'),
  isLoggedIn: ApplicationSettings.getString('token') ? true : false,

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
  SAVE_TOKEN (state, { token, remember }) {
    state.token = token;
    ApplicationSettings.setString('token', token);
    state.isLoggedIn = true;
  },

  FETCH_USER_SUCCESS (state, { user }) {
    state.user = user
  },

  FETCH_USER_FAILURE (state) {
    state.token = null
    ApplicationSettings.remove('isLoggedIn')
  },

  LOGOUT (state) {
    state.user = null
    ApplicationSettings.remove('isLoggedIn')
    state.isLoggedIn = false
  },

  UPDATE_USER (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {

  async login ({ commit, dispatch }, payload) {
    try {
      const { data } = await userApi.signin(payload)
      console.log(data,'this fortm', payload)
      commit('SAVE_TOKEN', { token: data.user.token.plainTextToken, remember: payload.remember_me });
      commit('FETCH_USER_SUCCESS', { user: data.user });
      return data;

    } catch (err) {
      console.log(err);
    }
    // commit('LOGOUT')
    console.log('asdasd');
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
      const { data } = await userApi.me()

      console.log('data', data);
      commit('FETCH_USER_SUCCESS', { user: data })
    } catch (e) {
      commit('FETCH_USER_FAILURE')
    }
  },

  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },

  async logout ({ commit }) {
    try {
      await userApi.logout()
    } catch (e) { }

    commit('LOGOUT')
  }
}
