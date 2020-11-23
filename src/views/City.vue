<template>
  <div class="home" v-bind:class="{ hot: backgroundCheck}">

    <weather-store></weather-store>

    <hr>
    <router-link to="/city/Basel">Basel</router-link>

  </div>
</template>

<script>
  import WeatherStore from '@/components/WeatherStore'
  import {mapGetters} from "vuex";
  import store from '../store'

  export default {
    name: 'City',
    components: {
      WeatherStore
    },
    data () {
      return {
      }
    },
    computed: {
      backgroundCheck () {
        if (this.forecast.main && this.forecast.main.temp > 10) {
          return true
        } else {
          return false
        }
      },
      ...mapGetters({
        forecast: "currentForecast"
      }),
    },
    methods: {
    },
    beforeRouteUpdate: (to, from, next) => {
      store.dispatch('fetchWeatherForStore', to.params.city).then(response => {
        console.log(response)
        next()
      }).catch(err => {
        console.log(err)
      })

    }

  }
</script>
<style>
  .home {
    height: 100vh;
    background-attachment: fixed;
    background-image: url('~@/assets/cold_bg.jpg');
    background-repeat: no-repeat;
  }

  .hot {
    background-attachment: fixed;
    background-image: url('~@/assets/warm_bg.jpg');
    background-repeat: no-repeat;
  }
</style>
