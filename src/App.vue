<template>
  <div id="app">
    <navigation/>
    <router-view/>
    <site-footer/>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  import SiteFooter from '@/components/SiteFooter.vue'

  export default {
    name: 'app',
    components: {
      Navigation,
      SiteFooter
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Roboto');

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
  }

  .site-container {
    max-width: 1700px;
    margin: auto;
  }

  .content-container {
    max-width: 1170px;
    margin: auto;
  }
</style>
