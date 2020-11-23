import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
import axios from "axios";

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
    fetchWeather(state, payload) {
      return axios.get(process.env.VUE_APP_WEATHER_API_URL + '/weather?q=' + payload + '&units=metric&lang=de&appid=' + process.env.VUE_APP_WEATHER_API_KEY)
          .then(function (response) {
            return response.data
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
  }
})
