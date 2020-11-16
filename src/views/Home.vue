<template>
  <div class="home" v-bind:class="{ hot: backgroundCheck}">

    <input v-model="city" v-on:keyup.enter="fetchWeather">

    <br>
    <p
      v-if="forecast.main">
      {{forecastTemperature}}
    </p>

    <weather-item city="Bern"></weather-item>
    <weather-item city="London"></weather-item>
    <weather-item city="Milano"></weather-item>
    <weather-item city="Tokyo"></weather-item>

  </div>
</template>

<script>
  import WeatherItem from '@/components/WeatherItem'
  import { mapFields } from 'vuex-map-fields';

  export default {
    name: 'Home',
    components: {
      WeatherItem
    },
    data () {
      return {
        forecast: {}
      }
    },
    computed: {
      ...mapFields(['city']),
      forecastTemperature () {
        return this.forecast.main.temp + ' Grad Celcius'
      },
      backgroundCheck () {
        if (this.forecast.main && this.forecast.main.temp > 10) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      fetchWeather() {
        this.$store.dispatch('fetchWeather', this.city).then(response => {
          this.forecast = response
        })
      }
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