<template>
  <div class="home">
    <hero/>
    <featured-products/>
  </div>
</template>

<script>
// @ is an alias to /src
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'home',
  components: {
    FeaturedProducts,
    Hero
  }
}
</script>
