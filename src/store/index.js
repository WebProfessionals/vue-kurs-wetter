import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Grabs'
  },
  getters: {
    getField,
    currentCity: state => {
      return state.city
    }
  },
  mutations: {
    updateField,
    setCity(state, payload) {
      state.city = payload
    }
  },
  actions: {
  }
})
