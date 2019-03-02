<template>
  <div class="brand">
    <page-title bg="assets/img/brand-header.jpg">
      <h1 class="page-title__heading" slot="heading">The <span class="page-title__heading--light">brand</span></h1>
      <p class="page-title__subheading" slot="subheading">Company slogan goes here</p>
    </page-title>

    <div class="content-container">
      <div class="our-story">

        <div class="our-story__block">
          <picture class="our-story__image">
              <source srcset="@/assets/img/story-1.jpg">
              <img src="@/assets/img/story-1.jpg" />
          </picture>
        </div>

        <div class="our-story__block">
          <p class="our-story__title">Hand designed clothing</p>
          <p class="our-story__subtitle">Established in 2013, avenue fashion Sed dictum elit vel sapien luctus eras</p>
          <p class="our-story__body">Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim consectetur, id condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient montes, nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.</p>
        </div>
        
        <div class="our-story__block">
          <picture class="our-story__image">
              <source srcset="@/assets/img/story-2.jpg">
              <img src="@/assets/img/story-2.jpg" />
          </picture>
        </div>

        <div class="our-story__block">
          <div class="our-story__block">
            <picture class="our-story__image">
                <source srcset="@/assets/img/story-3.jpg">
                <img src="@/assets/img/story-3.jpg" />
            </picture>
          </div>
        </div>

        <div class="our-story__block">
          <p class="our-story__title">Ethitcal trading</p>
          <p class="our-story__subtitle">We oversee the working conditions of the people in the supply chain</p>
          <p class="our-story__body">Nullam dapibus consectetur neque, faucibus porttitor purus iaculis sed. Aenean eras dapibus augue, eget dignissim dui maecenas et rhoncus mim, vel semper arcu lorem. Pellentesque congue justo esteir pellentesque aliquet massa eget posuere tincidunt. Cras viverra ullamcorper nunc accumsan hendrerit.</p>
        </div>

        <div class="our-story__block">
          <p class="our-story__title">Our values, vision and strategy</p>
          <p class="our-story__subtitle">The above image would be a great place for an advertising video</p>
          <p class="our-story__body">Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac facilisis quam ornare aliquam. Etiam cursus odio vitae dui dignissim, sed tempus lacus tincidunt et donec sapien velit, rhoncus eu nulla a, molestie tempus mi maecenas sagittis ornare. Pellentesque sapien mi, tincidunt nec magna vitae, volutpat elementum odioni lorem Aliquam tempor massa vitae augue mattis tempor id in ante ut augue erat, luctus eil.</p>
        </div>

        <div class="our-story__block">
          <div class="our-story__awards">
            <img class="award-logo" src="@/assets/img/award-bfa.jpg" alt="BFA">
            <img class="award-logo" src="@/assets/img/award-cosmo.jpg" alt="Cosmopolitan">
            <img class="award-logo" src="@/assets/img/award-mfa.png" alt="MFA">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import PageTitle from '@/components/PageTitle.vue'

  export default {
    name: 'brand',
    components: {
      PageTitle
    }
  }
</script>

<style lang="scss">
@import "@/assets/sass/_all.scss";

  .our-story {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(20, 50px);
    grid-gap: 5px 30px;
    margin-top: 55px;

    &__block {
      width: 100%;
      height: 100%;

      &:nth-child(1) {
        grid-column: 1;
        grid-row-start: span 7;
      }

      &:nth-child(2) {
        grid-column: 2;
        grid-row-start: 2;
        grid-row-end: 6;
      }

      &:nth-child(3) {
        grid-column: 2;
        grid-row-start: 6;
        grid-row-end: 13;
      }

      &:nth-child(4) {
        grid-column: 1;
        grid-row-start: 9;
        grid-row-end: 16;
      }

      &:nth-child(5) {
        grid-column: 2;
        grid-row-start: 14;
        grid-row-end: 18;
      }

      &:nth-child(6) {
        grid-column: 1;
        grid-row-start: 17;
        grid-row-end: 20;
      }

      &:nth-child(7) {
        grid-column: 2;
        grid-row-start: 17;
        grid-row-end: 20;
      }
    }

    &__image {
      img {
        display: block;
        width: 100%;
      }
    }

    &__title {
      text-transform: uppercase;
      font-weight: $w-medium;
      font-size: 1.4em;
      margin: 0;
      color: $heading;;
    }

    &__subtitle {
      text-transform: uppercase;
      font-weight: $w-medium;
      color: $grey;
      margin: 12px 0;
    }

    &__body {
      color: $body-font;
      line-height: 1.6em;
      margin: 0;
    }

    &__awards {
      display: flex;
      justify-content: space-between;

        .award-logo {
          width: auto;
          height: 130px;
        }
    }
  }
</style>
