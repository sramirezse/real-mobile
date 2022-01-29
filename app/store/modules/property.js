import propertyapi from "../../api/propertyapi";
import * as ApplicationSettings from '@nativescript/core/application-settings';

export const state = {
  property: {},
  properties: [],
  rent: [],
  sale: [],
  total: 0,
  totalRent: 0,
  totalSale: 0,
  loading: true,
  searchResult: [],
}

export const getters = {
  property: state => state.property,
  properties: state => state.properties,
  rent: state => state.rent,
  sale: state => state.sale,
  totalLoad: state => state.properties.length,
  totalLoadRent: state => state.rent.length,
  totalLoadSale: state => state.sale.length,
  loading: state => state.loading,
  searchResult: state => state.searchResult,
}

export const mutations = {
  FETCH_PROPERTY(state, property){
    state.property = property
    state.loading = false
  },
  FETCH_SEARCH(state, searchResult){
    state.searchResult = searchResult
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
  FETCH_RENTS(state, properties){
    // console.log('FETCH_PROPERTIES las qeue vienen', properties);
    // console.log('FETCH_PROPERTIES lñasque estan', state.properties);
    // state.properties = properties.data
    const props = state.rent;
    props.push(...properties.data);
    // console.log('FETCH_PROPERTIES lñasque estan', state.properties);
    state.totalRent = properties.total
    state.loading = false
  },
  FETCH_SALES(state, properties){
    // console.log('FETCH_PROPERTIES las qeue vienen', properties);
    // console.log('FETCH_PROPERTIES lñasque estan', state.properties);
    // state.properties = properties.data
    const props = state.sale;
    props.push(...properties.data);
    // console.log('FETCH_PROPERTIES lñasque estan', state.properties);
    state.totalSale = properties.total
    state.loading = false
  },

}

export const actions = {
  async index({ commit }, payload) {
    try {
      const res = await propertyapi.index(payload)
      switch(payload.params.origin){
        case 'rent':
          commit('FETCH_RENTS', res);
          break;
        case 'sale':
          commit('FETCH_SALES', res);
          break;
        default:
          commit('FETCH_PROPERTIES', res);
          break;


      }
      // console.log('payload', payload.params.origin);
      return res;
    } catch (e) {
      console.log(e.data);
    }
  },

  async search({ commit }, payload) {
    try{
      const res = await propertyapi.index(payload)
      // console.log('search', res.data);
      commit('FETCH_SEARCH', res.data);
      // return res;
    }catch(e){
      console.log(e.data);
    }
  }
}
