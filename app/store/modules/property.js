import propertyapi from "../../api/propertyapi";
import * as ApplicationSettings from '@nativescript/core/application-settings';

export const state = {
  property: {},
  properties: [],
  total: 0,
  loading: true,
}

export const getters = {
  property: state => state.property,
  properties: state => state.properties,
  loading: state => state.loading,
}

export const mutations = {
  FETCH_PROPERTY(state, property){
    state.property = property
    state.loading = false
  },
  FETCH_PROPERTIES(state, properties){
    state.properties = properties.data
    state.total = properties.total
    state.loading = false
  },

}

export const actions = {
  async index({ commit }, payload) {
    try {
      const {data} = await propertyapi.index(payload)
      commit('FETCH_PROPERTIES', data);
      return data;
    } catch (e) {
      console.log(e.data);
    }
  }
}
