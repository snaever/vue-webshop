<template>
    <div class="hero">
        <div class="site-container">
            <div class="hero-title">
                <div class="hero-title__letter">A</div>
                <div class="hero-title__letter">V</div>
                <div class="hero-title__letter">E</div>
            </div>

            <picture class="hero-image">
                <source srcset="@/assets/img/hero.jpg">
                <img src="@/assets/img/hero.jpg" />
            </picture>

            <a href="#" class="hero-button">Shop men's collection</a>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/sass/_all.scss";

    .hero {
        position: relative;
        top: -70px;
        background-color: $snow;
        height: $hero-height;
        margin: 0 0 60px 0;

        @media (min-width: $breakpoint-tablet) {
            height: 400px;
            margin: 0;
        }
    }

    .hero-title {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: $hero-height;
        position: relative;
        z-index: 2;

        @media (min-width: $breakpoint-tablet) {
            height: 400px;
        }

        &__letter {
            color: $heading;
            font-size: 40em;
            font-weight: $w-bold;

            @media (min-width: $breakpoint-tablet) {
                font-size: 10em;
            }
        }
    }

    .hero-image {
        position: absolute;
        top: 0;
        left: 180px;
        z-index: 1;

        @media (min-width: $breakpoint-tablet) {
            left: 0;
        }

        img {
            height: $hero-height;

            @media (min-width: $breakpoint-tablet) {
                height: 400px;
            }
        }
    }

    .hero-button {
        position: absolute;
        top: 770px;
        right: 460px;
        @include cta-btn($accent-color, #fff);

        @media (min-width: $breakpoint-tablet) {
            top: 300px;
            right: 0;
        }
    }
</style>
