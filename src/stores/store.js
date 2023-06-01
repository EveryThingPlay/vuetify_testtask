import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    country: null,
    score: null,
  },
  mutations: {
    update(state, payload) {
      Object.assign(state, payload);
    },
  },
})

export default store