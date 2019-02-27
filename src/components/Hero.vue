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
$hero-height: 920px;

    .hero {
        position: relative;
        top: -70px;
        background-color: #f8f8f8;
        height: $hero-height;
        margin: 0 0 60px 0;
    }

    .hero-title {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: $hero-height;
        position: relative;
        z-index: 2;

        &__letter {
            color: #575153;
            font-size: 40em;
            font-weight: 700;
        }
    }

    .hero-image {
        position: absolute;
        top: 0;
        left: 180px;
        z-index: 1;

        img {
            height: $hero-height;
        }
    }

    .hero-button {
        position: absolute;
        top: 770px;
        right: 460px;
        border: 2px solid #737373;
        padding: 15px 30px;
        color: #737373;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 1.2em;
        letter-spacing: 2px;
        z-index: 3;
        transition: 0.2s;

        &:hover {
            border-color: #00c8c8;
            background-color: #00c8c8;
            color: #fff;
        }
    }
</style>
