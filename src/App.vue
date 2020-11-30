<template>
  <v-app>
    <v-app-bar
      app
      >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Vue.JS Kurs: Meine Wetter-App</v-toolbar-title>
    </v-app-bar>
    <v-main v-bind:class="backgroundImage">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters({
        backgroundImage: "backgroundImage"
      })
    },
    mounted: function () {
      this.$store.dispatch('fetchWeatherForStore', this.$store.state.city)
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .cold {
    background-attachment: fixed;
    background-image: url('~@/assets/cold_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hot {
    background-attachment: fixed;
    background-image: url('~@/assets/warm_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
