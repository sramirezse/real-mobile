
// initial state
const state = () => ({
    user: {
        none: 0
    }
});

// getters
export const getters = {


}

// mutations
export const mutations = {
    FETCH(state, data) {
        state.properties = data.data;
        state.total = data.total;
        state.loading = false;
    },

}

// actions
export const actions = {
    async login({ commit }, payload) {

        // const configs = {
        //     headers: {Authorization: 'Bearer ' + ApplicationSettings.getString('token')}
        // }



    },

}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
