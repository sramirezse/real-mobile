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
  totalLoad: state => state.properties.length,
  loading: state => state.loading,
}

export const mutations = {
  FETCH_PROPERTY(state, property){
    state.property = property
    state.loading = false
  },
  FETCH_PROPERTIES(state, properties){
    // console.log('FETCH_PROPERTIES las qeue vienen', properties);
    // console.log('FETCH_PROPERTIES lñasque estan', state.properties);
    // state.properties = properties.data
    const props = state.properties;
    props.push(...properties.data);
    // console.log('FETCH_PROPERTIES lñasque estan', state.properties);
    state.total = properties.total
    state.loading = false
  },

}

export const actions = {
  async index({ commit }, payload) {
    try {
      const res = await propertyapi.index(payload)
      commit('FETCH_PROPERTIES', res);
      return res;
    } catch (e) {
      console.log(e.data);
    }
  }
}
