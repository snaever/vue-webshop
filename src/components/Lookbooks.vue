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
            <p class="lookbook__body">See an item you like and click the <i class="fal fa-heart"></i> button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!</p>
            <a href="#" class="lookbook__cta">View now</a>
        </div>
    </div>
</template>

<style lang="scss">
    .lookbook {
        margin: 55px 0;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: 1;
        grid-column-gap: 30px;

        &__wrapper {
            position: relative;
            width: 100%;
            height: 530px;
            background-color: #f8f8f8;
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
            font-weight: 700;
            font-size: 4em;
            text-transform: uppercase;
            text-align: right;
            color: #575153;

            &--light {
                display: block;
                font-weight: 300;
            }
        }

        &__body {
            position: absolute;
            top: 240px;
            right: 30px;
            width: 300px;
            line-height: 1.7em;
            text-align: right;
            color: #727272;
        }

        &__cta {
            position: absolute;
            top: 370px;
            right: 30px;
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
    }
</style>
