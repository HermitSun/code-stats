import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    token: '' // token
  },
  mutations: {
    updateToken (state, token) {
      state.token = token
    }
  },
  actions: {
    updateToken (context, token) {
      context.commit('updateToken', token)
    }
  }
})
