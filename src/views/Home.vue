<template>
  <div class="home" v-bind:class="{ hot: backgroundCheck}">

    <input v-model="city" v-on:keyup.enter="fetchWeather">

    <br>
    <p
      v-if="forecast.main">
      {{forecastTemperature}}
    </p>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Home',
    data () {
      return {
        city: '',
        forecast: {}
      }
    },
    computed: {
      forecastTemperature () {
        return this.forecast.main.temp + ' Grad Celcius'
      },
      apiUrl () {
        return 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&lang=de&appid=' + process.env.VUE_APP_WEATHER_API_KEY
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
        let self = this
        axios.get(this.apiUrl)
                .then(function (response) {
                  // handle success
                  self.forecast = response.data;
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
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