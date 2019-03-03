<template>
    <div class="lookbook">
        <div class="lookbook__wrapper">
            <picture class="lookbook__model">
                <source srcset="@/assets/img/male.png">
                <img src="@/assets/img/male.png" />
            </picture>
            <h2 class="lookbook__title">Men's <span class="lookbook__title--light">lookbook</span></h2>
            <p class="lookbook__body">Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.</p>
            <a href="#" class="lookbook__cta">View now</a>
        </div>
        <div class="lookbook__wrapper">
            <picture class="lookbook__model">
                <source srcset="@/assets/img/female.png">
                <img src="@/assets/img/female.png" />
            </picture>
            <h2 class="lookbook__title">Women's <span class="lookbook__title--light">lookbook</span></h2>
            <p class="lookbook__body">Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.</p>
            <a href="#" class="lookbook__cta">View now</a>
        </div>
        <div class="lookbook__wrapper">
            <picture class="lookbook__model">
                <source srcset="@/assets/img/you.png">
                <img src="@/assets/img/you.png" />
            </picture>
            <h2 class="lookbook__title">Your <span class="lookbook__title--light">lookbook</span></h2>
            <p class="lookbook__body">See an item you like and click the <font-awesome-icon :icon="['fal', 'heart']" /> button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!</p>
            <a href="#" class="lookbook__cta">View now</a>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/sass/_all.scss";

    .lookbook {
        margin: 55px 0;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: auto;
        grid-column-gap: 30px;

        @media (max-width: $breakpoint-tablet) {
            grid-template-columns: auto;
            grid-template-rows: repeat(3, auto);
            grid-column-gap: 0;
            grid-row-gap: 30px;
        }

        &__wrapper {
            position: relative;
            width: 100%;
            height: 530px;
            background-color: $snow;

            @media (max-width: $breakpoint-tablet) {
                height: 460px;
            }
        }

        &__model {
            position: absolute;
            bottom: 0;
            left: 20px;
            height: 420px;

            img {
                height: 420px;
            }
        }

        &__title {
            position: absolute;
            top: 120px;
            right: 30px;
            width: 100%;
            margin: 0;
            font-weight: $w-bold;
            font-size: 4em;
            text-transform: uppercase;
            text-align: right;
            color: $heading;

            &--light {
                display: block;
                font-weight: $w-light;
            }
        }

        &__body {
            position: absolute;
            top: 240px;
            right: 30px;
            width: 300px;
            line-height: 1.7em;
            text-align: right;
            color: $grey;
        }

        &__cta {
            @include cta-btn($accent-color, #fff);
            position: absolute;
            top: 370px;
            right: 30px;

            @media (max-width: $breakpoint-mobile) {
                background-color: $snow;
            }
        }
    }
</style>
