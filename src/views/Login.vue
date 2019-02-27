<template>
  <div class="login">
    <page-title bg="assets/img/brand-header.jpg">
      <h1 class="page-title__heading" slot="heading">Welcome <span class="page-title__heading--light">to AVE</span></h1>
      <p class="page-title__subheading" slot="subheading">Sign in or register</p>
    </page-title>

    <div class="content-container">
        <div class="forms">

            <div class="forms__content">
                <p class="forms__title">Sign in</p>
                <form action="post">
                  <input class="forms__entry" type="text" name="email" id="email" placeholder="Your email..">
                  <input class="forms__entry" type="password" name="password" id="password" placeholder="Your password..">
                </form>
            </div>

            <div class="forms__content">
                <p class="forms__title">Sign in</p>
                <form action="post">
                  <input class="forms__entry" type="text" name="email" id="email" placeholder="Your email..">
                  <input class="forms__entry" type="password" name="password" id="password" placeholder="Your password..">
                </form>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
  import PageTitle from '@/components/PageTitle.vue'

  export default {
    name: 'app',
    components: {
      PageTitle
    }
  }
</script>

<style lang="scss">
    .forms {
        margin-top: 55px;
        display: flex;
        justify-content: space-between;

        &__content {
          width: 50%;
        }

        &__title {
            font-weight: 400;
            text-transform: uppercase;
            color: #575153;
            font-size: 1.4em;
            margin: 0 0 50px 0;
        }

        &__entry {
          width: 100%;
          height: 40px;
          margin-bottom: 30px;
          padding-left: 10px;
          border: 1px solid #e7e7e7;
          box-sizing: border-box;
        }
    }
</style>
