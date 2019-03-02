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
@import "@/assets/sass/_all.scss";

  html, body {
      max-width: 100%;
      overflow-x: hidden;
  }

  body {
    font-family: $main-font;
    font-size: 13px;
  }

  .site-container {
    max-width: 1700px;
    padding: 0 20px;
    margin: auto;
  }

  .content-container {
    max-width: 1170px;
    padding: 0 20px;
    margin: auto;
  }

  @media (max-width: $breakpoint-tablet) {
      .desktop {
        display: none;
      }
  }

    @media (min-width: $breakpoint-tablet + 1) {
      .mobile {
        display: none;
      }
  }
</style>
