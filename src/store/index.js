import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Grabs',
    forecast: {}
  },
  getters: {
    getField,
    currentCity: state => {
      return state.city
    },
    currentForecast: state => {
      return state.forecast
    },
    backgroundImage: state => {
      if (state.forecast.main && state.forecast.main.temp > 10) {
        return 'hot'
      } else {
        return 'cold'
      }
    }
  },
  mutations: {
    updateField,
    setCity(state, payload) { state.city = payload },
    setForecast(state, payload) { state.forecast = payload }
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
    },
    fetchWeatherForStore({commit}, payload) {
      return axios.get(process.env.VUE_APP_WEATHER_API_URL + '/weather?q=' + payload + '&units=metric&lang=de&appid=' + process.env.VUE_APP_WEATHER_API_KEY)
          .then(function (response) {
            if (response.data.main) {
              commit('setForecast', response.data)
              return response.data
            } else {
              throw new Error('Es ist ein Fehler aufgetreten')
            }

          })
          .catch(function (error) {
            // handle error
            return error
          })
    },
  }
})
