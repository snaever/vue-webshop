<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700|Roboto');

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
  }

  .site-container {
    max-width: 1700px;
    margin: auto;
  }
</style>
