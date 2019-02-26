<template>
  <div class="home">
    <hero/>
    <featured-products/>
    <lookbooks/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import Lookbooks from '@/components/Lookbooks.vue'

export default {
  name: 'home',
  components: {
    Hero,
    FeaturedProducts,
    Lookbooks
  }
}
</script>
