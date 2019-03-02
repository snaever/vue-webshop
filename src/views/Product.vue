<template>
    <div class="product">
        <page-title bg="assets/img/brand-header.jpg">
            <h1 class="page-title__heading" slot="heading">Product <span class="page-title__heading--light">view</span></h1>
            <p class="page-title__subheading" slot="subheading">{{ product.gender }} - {{ product.section }} - {{ product.category }} - {{ product.name }}</p>
        </page-title>

        <div class="content-container">
            <div class="product-info">
                <div class="product-gallery">
                    <hooper :itemsToShow="1">
                        <slide v-for="(image, index) in product.images" :key="index">
                            <picture class="product-gallery__image">
                                <source :src="require('@/assets/img/items/' + image)">
                                <img :src="require('@/assets/img/items/' + image)"/>
                            </picture>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    </hooper>
                </div>
                
                <div class="product-data">
                    <h2 class="product-data__title">{{ product.name }}</h2>

                    <div class="product-meta">
                        <div class="product-reviews" title="70%">
                            <div class="product-reviews__back-stars">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                
                                <div class="product-reviews__front-stars" style="width: 70%">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                        <p class="product-meta__text">3 Review(s)</p>
                        <p class="product-meta__text">|</p>
                        <p class="product-meta__text"><a href="#">Add a Review</a></p>
                        <p class="product-meta__text">|</p>
                        <p class="product-meta__text">Share:</p>
                        <p class="product-meta__text product-meta__text--sites">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="far fa-envelope"></i></a>
                        </p>

                    </div>

                    <div class="product-data__price">
                        <p v-if="product.sale.onSale">
                            <span class="product-data__price--currency">£</span>
                            <span class="product-data__price--regular">{{ product.sale.originalPrice }}</span>
                        </p>
                        <p>
                            <span class="product-data__price--currency">£</span>{{ product.price }}
                        </p>
                    </div>

                    <div class="product-content">
                        <p class="product-content__meta"><span class="product-content__meta--heading">Availability: </span>
                            <span v-if="product.stock > 10">
                                In stock
                            </span>
                            <span v-else-if="product.stock == 0">
                                Out of stock
                            </span>
                            <span v-else-if="product.stock < 10">
                                Low stock
                            </span>
                        </p>
                        <p class="product-content__meta"><span class="product-content__meta--heading">Product code: </span>#{{ product.sku }}</p>
                        <p class="product-content__meta"><span class="product-content__meta--heading">Tags: </span>
                            <span v-for="(tag, index) in product.tags" :key="index">
                                <span v-if="index != 0">, </span><a href="#">{{ tag }}</a>
                            </span>
                        </p>
                    
                        <div class="product-content__description">
                            {{ product.intro.body }}
                            <ul>
                                <li v-for="(point, index) in product.intro.points" :key="index">{{ point }}</li>
                                <li>Free shipping with 4 days delivery</li>
                            </ul>
                        </div>

                        <form>
                            <div class="product-options">
                                <div class="product-options__select">
                                    <label class="product-options__label" for="colour">Colour</label>
                                    <div class="product-options__select-box">
                                        <select id="colour" name="colour">
                                            <option value="0" disabled selected>Select Colour</option>
                                            <option v-for="(colour, index) in product.colours" :key="index">{{ colour }}</option>
                                        </select>
                                        <i class="fal fa-angle-down"></i>
                                    </div>
                                </div>

                                <div class="product-options__select">
                                    <label class="product-options__label" for="size">Size</label>
                                    <div class="product-options__select-box">
                                        <select id="size" name="size">
                                            <option value="0" disabled selected>Select Size</option>
                                            <option v-for="(size, index) in product.sizes" :key="index">{{ size }}</option>
                                        </select>
                                        <i class="fal fa-angle-down"></i>
                                    </div>
                                </div>

                                <div class="product-options__qty">
                                    <label class="product-options__label" for="qty">Qty</label>
                                    <div class="quantity-toggle">
                                        <input class="quantity-toggle__input" type="text" name="qty" id="qty" :value="quantity" readonly>
                                        <div class="quantity-toggle__buttons">
                                            <button type="button" @click="increment()"><i class="fal fa-angle-up"></i></button>
                                            <button type="button" @click="decrement()"><i class="fal fa-angle-down"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="product-buttons">
                                <button class="product-buttons__purchase" type="submit"><i class="far fa-shopping-cart"></i> Add to Cart</button>
                                <button type="button" class="product-buttons__lookbook"><i class="far fa-heart"></i> Add to Lookbook</button>
                            </div>

                            <button type="button" class="product-content__compare-btn"><i class="far fa-compress-alt"></i> Add to Compare</button>

                        </form>

                    </div>
                    
                </div>

            </div>
            
            <div class="product-details">
                <tabs :options="{ useUrlFragment: false }">
                    <tab name="Description">
                        <p class="product-details__title">{{ product.description.heading }}</p>
                        <p>{{ product.description.body }}</p>
                    </tab>
                    <tab name="Video">
                        <div v-if="product.video.isVideo">
                            <youtube :video-id="product.video.youtubeId"></youtube>
                        </div>
                    </tab>
                    <tab name="Size &amp; specs">
                        Doesn't take up much space in the closet
                    </tab>
                    <tab name="Delivery &amp; returns">
                        Free shipping with 4 days delivery
                    </tab>
                    <tab name="Reviews">
                        Very good
                    </tab>
                </tabs>
            </div>

        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import axios from "axios";
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation 
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: 'product',
    components: {
        PageTitle,
        Hooper,
        Slide,
        HooperNavigation
    },
    data () {
        return {
            product: {},
            quantity: 1,
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            let productID = this.$route.params.id;

            axios
                .get("/data.json")
                .then(response => (this.product = response.data[productID]))
                .catch(err => console.log(err.message));
        },
        increment() {
            this.quantity++
        },
        decrement() {
            if(this.quantity === 1) {
                /* It should not be possible to buy less than one item */
            } else {
                this.quantity--
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/sass/_all.scss";

    .product-info {
        display: flex;
        justify-content: space-between;
        margin-top: 55px;

        @media (max-width: $breakpoint-mobile) {
            display: block;
        }
    }

    .product-gallery {
        width: 50%;
        height: 710px;
        margin-right: 15px;
        background-color: $snow;

        @media (max-width: $breakpoint-mobile) {
            width: 100%;
            height: auto;
            margin: 0 0 20px 0;
        }

        .hooper {
            height: 100%;

            &-slide {
                width: 100%!important;
            }

            &-next, &-prev {
                transition: 0.1s;

                path:last-child {
                    transition: 0.1s;
                }

                &:hover {
                    &:not(.is-disabled) {
                        background-color: $accent-color;

                        path:last-child {
                            fill: white;
                        }
                    }
                }
            }
        }

        &__image {
            width: 100%;
            height: 100%;

            img {
                display: block;
                width: 100%;
                margin: 0;
            }
        }
    }

    .product-data {
        width: 50%;
        margin-left: 15px;

        @media (max-width: $breakpoint-mobile) {
            width: 100%;
            margin: 0;
        }

        &__title {
            margin: 0;
            font-weight: $w-medium;
            color: $heading;
            text-transform: uppercase;
            font-size: 1.4em;
        }

        &__price {
            display: flex;
            font-size: 2.2em;
            font-weight: $w-light;
            color: #9a9a9a;

            &--regular {
                text-decoration: line-through;
                margin-right: 20px;
            }

            &--currency {
                vertical-align: text-top;
                font-size: 0.7em;
            }
        }
    }

    .product-meta {
        display: flex;
        align-items: center;
        margin-top: 20px;
        color: $grey;
        font-weight: $w-medium;

        @media (max-width: $breakpoint-mobile) {
            flex-wrap: wrap;
        }

        &__text {
            margin: 0 10px;

            &--sites {
                display: flex;
                width: 130px;
                justify-content: space-between;
            }

            a {
                color: inherit;
                text-decoration: none;
                transition: 0.1s;

                &:hover {
                    color: $accent-color;
                }
            }
        }
    }

    .product-reviews {
        display: flex;
        margin-right: 10px;

        @media (max-width: $breakpoint-mobile) {
            margin: 20px 5px;
        }

        &__back-stars {
            display: flex;
            color: #dfdfde;
            position: relative;
        }

        &__front-stars {
            display: flex;
            color: #ded3aa;
            overflow: hidden;
            position: absolute;
            top: 0;
        }
    }

    .product-content {
        &__meta {
            color: $body-font;

            &--heading {
                color: $heading;
                font-weight: $w-bold;
                text-transform: uppercase;
            }

            a {
                color: $accent-color;
                text-decoration: none;
                transition: 0.1s;

                &:hover {
                    color: $body-font;
                }
            }
        }

        &__description {
            font-family: $secondary-font;
            font-size: 1.1em;
            line-height: 1.5em;
            margin: 30px 0;
            color: $body-font;

            ul {
                padding: 0 20px;
            }
        }

        &__compare-btn {
            background-color: transparent;
            border: 0;
            padding: 0;
            margin-top: 30px;
            color: $grey;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 1.2em;
            letter-spacing: 2px;
            z-index: 3;
            transition: 0.2s;
            cursor: pointer;
            transition: 0.1s;

            .far {
                background-color: $grey;
                color: #ffffff;
                border-radius: 100%;
                width: 30px;
                height: 30px;
                line-height: 30px;
                padding-left: 3px;
                box-sizing: border-box;
                transition: 0.1s;
            }

            &:hover {
                color: $accent-color;

                .far {
                    background-color: $accent-color;
                }
            }
        }
    }

    .product-options {
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin-top: 50px;

        @media (max-width: $breakpoint-mobile) {
            display: block;
        }

        &__select-box {
            position: relative;
            width: 170px;
            border: 1px solid $input-border;
            overflow: hidden;
            background: #ffffff;

            select {
                padding: 5px 8px;
                height: 35px;
                width: 130%;
                color: #989898;
                border: none;
                box-shadow: none;
                background: transparent;
                background-image: none;
                -webkit-appearance: none;
                cursor: pointer;
            }

            .fa-angle-down {
                position: absolute;
                top: 11px;
                right: 6px;
                color: #989898;
            }
        }

        &__label {
            display: block;
            font-weight: $w-bold;
            text-transform: uppercase;
            color: $heading;
            margin-bottom: 10px;

            @media (max-width: $breakpoint-mobile) {
                margin-top: 20px;
			}
        }
    }

    .quantity-toggle {
        display: flex;

        &__input {
            height: 37px;
            width: 35px;
            text-align: center;
            padding: 5px 8px;
            box-sizing: border-box;
            border: 1px solid $input-border;
            border-right: 0;
            cursor: default;
            color: #989898;
        }

        &__buttons {
            button {
                background-color: transparent;
                display: block;
                border: 1px solid $input-border;
                color: #989898;
                height: 18.5px;
                width: 35px;
                cursor: pointer;

                &:first-child {
                    border-bottom: 0;
                }
            }
        }
    }

    .product-buttons {
        margin-top: 50px;
        width: 530px;
        display: flex;
        justify-content: space-between;

        @media (max-width: $breakpoint-mobile) {
            display: block;
        }

        &__purchase {
            @include cta-btn($dark-grey, #fff);

            @media (max-width: $breakpoint-mobile) {
                display: block;
                margin-bottom: 20px;
			}
        }

        &__lookbook {
            @include cta-btn($accent-color, #fff);
            
            @media (max-width: $breakpoint-mobile) {
				display: block;
			}
        }
    }

    .product-details {
        &__title {
            font-family: $main-font;
            text-transform: uppercase;
            color: $grey;
            font-weight: $w-medium;
        }
        
        .tabs-component {
            margin: 4em 0;
        }

        .tabs-component-tabs {
            padding: 0;
            background-color: $snow;
            margin: 0;
        }

        @media (min-width: $breakpoint-tablet) {
            .tabs-component-tabs {
                border: 0;
                align-items: stretch;
                display: flex;
                justify-content: flex-start;
            }
        }

        .tabs-component-tab {
            text-transform: uppercase;
            color: $heading;
            height: 50px;
            line-height: 50px;
            font-size: 1.1em;
            font-weight: $w-medium;
            margin-right: 0;
            list-style: none;
        }

        .tabs-component-tab.is-active {
            color: #fff;
            background-color: #333333;
        }

        @media (min-width: $breakpoint-tablet) {
            .tabs-component-tab {
                margin-right: 30px;
                transition: transform .3s ease;
            }

            .tabs-component-tab.is-active {
                border-bottom: solid 1px #fff;
                z-index: 2;
                transform: translateY(0);
            }
        }

        .tabs-component-tab-a {
            align-items: center;
            color: inherit;
            display: flex;
            padding: 0 1em;
            text-decoration: none;
        }

        .tabs-component-panels {
            padding: 10px 0;
            font-family: $secondary-font;
            font-size: 1.1em;
            line-height: 1.5em;
            color: $body-font;
        }
    }
</style>
