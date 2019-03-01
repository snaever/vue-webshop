<template>
  <div>
    <div class="site-container">
      <ul class="featured-categories">
        <li class="featured-categories__category featured-categories__category--active"><a href="#">Popular</a></li>
        <li class="featured-categories__category"><a href="#">New Arrivals</a></li>
        <li class="featured-categories__category"><a href="#">Best Sellers</a></li>
        <li class="featured-categories__category"><a href="#">Special Offers</a></li>
        <li class="featured-categories__category"><a href="#">Coming Soon</a></li>
      </ul>

      <div class="featured-products">
        <div class="featured-item">
          <div class="featured-item__price">
            <span class="featured-item__currency">£</span>89.99
          </div>

          <div class="featured-details">
            <h3 class="featured-details__title">Womens burnt orange casual tee&nbsp;&nbsp;<span class="featured-item__currency">£</span>89.99</h3>
            <p class="featured-details__description">Classic casual t-shirt for women on the move. 100% cotton.</p>

            <div class="details-cta">
              <a href="#" class="details-cta__button"><i class="fas fa-shopping-cart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-heart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-compress-alt"></i></a>
            </div>
          </div>
        </div>

        <div class="featured-item">
          <div class="featured-item__price">
            <span class="featured-item__currency">£</span>89.99
          </div>

          <div class="featured-details">
            <h3 class="featured-details__title">Womens burnt orange casual tee&nbsp;&nbsp;<span class="featured-item__currency">£</span>89.99</h3>
            <p class="featured-details__description">Classic casual t-shirt for women on the move. 100% cotton.</p>

            <div class="details-cta">
              <a href="#" class="details-cta__button"><i class="fas fa-shopping-cart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-heart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-compress-alt"></i></a>
            </div>
          </div>
        </div>

        <div class="featured-item">
          <div class="featured-item__price">
            <span class="featured-item__currency">£</span>89.99
          </div>

          <div class="featured-details">
            <h3 class="featured-details__title">Womens burnt orange casual tee&nbsp;&nbsp;<span class="featured-item__currency">£</span>89.99</h3>
            <p class="featured-details__description">Classic casual t-shirt for women on the move. 100% cotton.</p>

            <div class="details-cta">
              <a href="#" class="details-cta__button"><i class="fas fa-shopping-cart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-heart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-compress-alt"></i></a>
            </div>
          </div>
        </div>

        <div class="featured-item">
          <div class="featured-item__price">
            <span class="featured-item__currency">£</span>89.99
          </div>

          <div class="featured-details">
            <h3 class="featured-details__title">Womens burnt orange casual tee&nbsp;&nbsp;<span class="featured-item__currency">£</span>89.99</h3>
            <p class="featured-details__description">Classic casual t-shirt for women on the move. 100% cotton.</p>

            <div class="details-cta">
              <a href="#" class="details-cta__button"><i class="fas fa-shopping-cart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-heart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-compress-alt"></i></a>
            </div>
          </div>
        </div>

        <div class="featured-item">
          <div class="featured-item__price">
            <span class="featured-item__currency">£</span>89.99
          </div>

          <div class="featured-details">
            <h3 class="featured-details__title">Womens burnt orange casual tee&nbsp;&nbsp;<span class="featured-item__currency">£</span>89.99</h3>
            <p class="featured-details__description">Classic casual t-shirt for women on the move. 100% cotton.</p>

            <div class="details-cta">
              <a href="#" class="details-cta__button"><i class="fas fa-shopping-cart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-heart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-compress-alt"></i></a>
            </div>
          </div>
        </div>

        <div class="featured-item">
          <div class="featured-item__price">
            <span class="featured-item__currency">£</span>89.99
          </div>

          <div class="featured-details">
            <h3 class="featured-details__title">Womens burnt orange casual tee&nbsp;&nbsp;<span class="featured-item__currency">£</span>89.99</h3>
            <p class="featured-details__description">Classic casual t-shirt for women on the move. 100% cotton.</p>

            <div class="details-cta">
              <a href="#" class="details-cta__button"><i class="fas fa-shopping-cart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-heart"></i></a>
              <a href="#" class="details-cta__button"><i class="fas fa-compress-alt"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

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
  background-color: salmon;
  transition: 0.2s;
  position: relative;
  cursor: pointer;

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

  &__price {
    font-size: 1.5em;
    font-weight: 300;
    margin: 1em;
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