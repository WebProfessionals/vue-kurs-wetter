<template>
  <div class="home">

    <input v-model="city">
    <button @click="fetchWeather">Suche</button>
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
        return 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&lang=de&appid=67250520d949de08b0b5023929e306b9'
      }
    },
    methods: {
      fetchWeather() {
        let self = this
        console.log('Wetter wird ausgegeben')
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
