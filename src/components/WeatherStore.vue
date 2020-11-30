<template>
    <v-card>
        <v-card-title>{{forecastCity}}</v-card-title>
        <v-card-text>
            Aktuelle Temperatur: {{forecastTemperature}}
        </v-card-text>
    </v-card>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
      name: 'Weather',
      data() {
        return {
        }
      },
      computed: {
        /*
        forecast() {
          return this.$store.state.forecast
        },
        */
        ...mapGetters({
          forecast: "currentForecast"
        }),
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
      },
      methods: {
      }
    }

</script>
