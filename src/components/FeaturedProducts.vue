<template>
  <div class="fp">
    <div class="site-container">
      <ul class="featured-categories">
        <li class="featured-categories__category featured-categories__category--active"><a href="#">Popular</a></li>
        <li class="featured-categories__category"><a href="#">New Arrivals</a></li>
        <li class="featured-categories__category"><a href="#">Best Sellers</a></li>
        <li class="featured-categories__category"><a href="#">Special Offers</a></li>
        <li class="featured-categories__category"><a href="#">Coming Soon</a></li>
      </ul>

      <div class="featured-products">
          <div class="featured-item" v-for="(product, index) in product" :key="index">

            <router-link :to="'product/' + index">
              <picture class="featured-item__image">
                <source :src="require('@/assets/img/items/' + product.images[0])">
                <img :src="require('@/assets/img/items/' + product.images[0])"/>
              </picture>
            </router-link>

            <div class="featured-item__price">

              <p v-if="product.sale.onSale">
                <span class="featured-item__currency">£</span>
                <span class="featured-item__price--regular">{{ product.sale.originalPrice }}</span>
              </p>
              <p>
                <span class="featured-item__currency">£</span>{{ product.price }}
              </p>
            </div>

            <div class="featured-details">
              <h3 class="featured-details__title"><router-link :to="'product/' + index">{{ product.name }}&nbsp;&nbsp;<span class="featured-item__currency">£</span>{{ product.price }}</router-link></h3>
              <p class="featured-details__description">{{ product.intro.body.substring(0,40) + "..." }}</p>

              <div class="details-cta">
                <router-link :to="'product/' + index" class="details-cta__button"><i class="fas fa-shopping-cart"></i></router-link>
                <router-link :to="'product/' + index" class="details-cta__button"><i class="fas fa-heart"></i></router-link>
                <router-link :to="'product/' + index" class="details-cta__button"><i class="fas fa-compress-alt"></i></router-link>
              </div>
            </div>

          </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      product: {},
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/data.json")
        .then(response => (this.product = response.data))
        .catch(err => console.log(err.message));
    }
  }
}
</script>


<style lang="scss">
.featured-categories {
  padding: 55px 0;
  margin: 0;
  border-top: 1px solid #eeeeee;

  &__category {
    display: inline;
    margin-right: 60px;
    font-size: 1em;

    a {
      color: #727272;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.1s;

      &:hover {
        color: #00c8c8;
      }
    }

    &--active a {
      color: #00c8c8;
    }
  }
}

.featured-products {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: auto 175px auto;
  grid-gap: 30px;
  padding-bottom: 55px;
  border-bottom: 1px solid #eeeeee;
}

.featured-item {
  height: 500px;
  background-color: #f8f8f8;
  transition: 0.2s;
  position: relative;

  &:nth-child(3) {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
    height: auto;
  }

  &:nth-child(4) {
    grid-column: 1 / span 2;
    grid-row: 2 / span 2;
    height: auto;
  }

  &:hover {
    box-shadow: 0px 0px 24px rgba(0,0,0,0.4);

    .featured-details {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
      top: 100%;
    }
  }

  &__image {
    position: absolute;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0);

    img {
      width: 100%;
    }
  }

  &__price {
    position: absolute;
    display: flex;
    font-size: 1.5em;
    font-weight: 300;
    margin: 1em;

    &--regular {
      text-decoration: line-through;
      margin-right: 20px;
    }

    p {
      margin: 0;
      text-shadow: 0px 0px 5px #f8f8f8;
    }
  }

  &__currency {
    vertical-align: text-top;
    font-size: 0.8em;
  }
}

.featured-details {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.2s, opacity 0.2s linear, top 0.1s linear;
  position: absolute;
  top: 90%;
  background-color: #fff;
  box-shadow: 0px 0px 24px rgba(0,0,0,0.4);
  width: 100%;
  z-index: 1;
  padding: 20px 40px;
  box-sizing: border-box;

  &__title {
    margin: 0;
    font-size: 1em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;

      a {
        color: inherit;
        text-decoration: none;
      }
  }

  &__description {
    font-family: 'Roboto', sans-serif;
    color: #8e8c8c;
    margin: 15px 0;
    font-size: 1em;
    text-align: center;
    font-weight: 400;
  }
}

.details-cta {
  display: flex;
  justify-content: space-evenly;
  width: 130px;
  margin: auto;

  &__button {
    background-color: #727272;
    color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    text-align: center;
    line-height: 30px;
    transition: 0.2s;

    &:hover {
      background-color: #00c8c8;
    }
  }
}
</style>