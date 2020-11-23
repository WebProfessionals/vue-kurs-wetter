<template>
    <div>
        {{forecastCity}}: {{forecastTemperature}}
    </div>
</template>

<script>

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
        forecastCity () {
          if (this.forecast.name) {
            return this.forecast.name
          } else {
            return 'unbekannt'
          }
        }
      },
      mounted: function () {
        this.fetchWeather()
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
