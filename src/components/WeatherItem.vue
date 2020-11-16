<template>
    <div>
        {{city}}: {{forecastTemperature}}
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
      name: 'Weather',
      data() {
        return {
          forecast: {}
        }
      },
      props: ['city'],
      computed: {
        forecastTemperature () {
          if (this.forecast.main) {
            return this.forecast.main.temp + ' Grad Celcius'
          } else {
            return 'unbekannt'
          }
        },
        apiUrl () {
          return 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&lang=de&appid=' + process.env.VUE_APP_WEATHER_API_KEY
        },
      },
      mounted: function () {
        this.fetchWeather()
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