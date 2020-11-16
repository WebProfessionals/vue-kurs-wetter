<template>
  <div id="app">
    <nav>
      <router-link to="/search">Suche nach Ortschaft</router-link> - <router-link to="/">Alles anzeigen</router-link>
    </nav>

    <router-view/>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
