<template>
  <div class="home">

    <input>
    <br>
    {{forecast}}

  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      city: '',
      forecast: '20 Grad, Sonne'
    }
  },
  methods: {
    fetchWeather() {

    }
  }

}
</script>
