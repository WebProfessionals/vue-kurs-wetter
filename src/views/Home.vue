<template>

  <v-container>
    <v-row>

      <v-col>

        <v-text-field v-model="city" v-on:keyup.enter="fetchWeather"></v-text-field>

        <weather-store></weather-store>

        <v-list class="mt-5">
          <v-list-item to="/city/grabs">Grabs</v-list-item>
          <v-list-item to="/city/kairo">Kairo</v-list-item>
          <v-list-item to="/city/new%20york">New York</v-list-item>
        </v-list>

        <br>
        <v-btn @click="goCity('New York')">New York</v-btn>
        <v-btn @click="goCity('Edinburgh')">Edinburgh</v-btn>

      </v-col>

    </v-row>
  </v-container>

</template>

<script>

  import WeatherStore from '@/components/WeatherStore'
  export default {
    name: 'Home',
    components: {
      WeatherStore
    },
    data () {
      return {
        city: ''
      }
    },
    computed: {
    },
    methods: {
      fetchWeather() {
        this.$store.dispatch('fetchWeatherForStore', this.city)
      },
      goCity(city) {
        this.$router.push( { name: 'City', params: { city: city } } )
      }
    }

  }
</script>
<style>

</style>
