<template>
    <div class="product">
        <page-title bg="assets/img/brand-header.jpg">
            <h1 class="page-title__heading" slot="heading">Product <span class="page-title__heading--light">view</span></h1>
            <p class="page-title__subheading" slot="subheading">Mens - Casuals - Hoodies &amp; Sweatshirts - Ave Classic Sweatshirt</p>
        </page-title>

        <div class="content-container">
            <div class="product-info">
                <div class="product-gallery"></div>
                
                <div class="product-data">
                    <h2 class="product-data__title">Ave Classic Sweatshirt</h2>

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

                    <p class="product-data__price">
                        <span class="product-data__price--currency">£</span>
                        <span class="product-data__price--regular">
                            107
                        </span>
                        <span class="product-data__price--currency">£</span>89.99
                    </p>

                    <div class="product-content">
                        <p class="product-content__meta"><span class="product-content__meta--heading">Availability: </span>In stock</p>
                        <p class="product-content__meta"><span class="product-content__meta--heading">Product code: </span>#499577</p>
                        <p class="product-content__meta"><span class="product-content__meta--heading">Tags: </span><a href="#">Classic</a>, <a href="#">Casual</a>, <a href="#">V-neck</a>, <a href="#">Loose</a></p>
                    
                        <div class="product-content__description">
                            <p>Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.</p>
                            <ul>
                                <li>Elasticated cuffs</li>
                                <li>Casual fit</li>
                                <li>100% Cotton</li>
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
                                            <option value="black">Black</option>
                                            <option value="bordeaux">Bordeaux</option>
                                            <option value="brown">Brown</option>
                                        </select>
                                        <i class="fal fa-angle-down"></i>
                                    </div>
                                </div>

                                <div class="product-options__select">
                                    <label class="product-options__label" for="size">Size</label>
                                    <div class="product-options__select-box">
                                        <select id="size" name="size">
                                            <option value="0" disabled selected>Select Size</option>
                                            <option value="xl">XL</option>
                                            <option value="l">L</option>
                                            <option value="medium">M</option>
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
                                <button class="product-buttons__cta product-buttons__cta--submit" type="submit"><i class="far fa-shopping-cart"></i> Add to Cart</button>
                                <button type="button" class="product-buttons__cta product-buttons__cta--lookbook"><i class="far fa-heart"></i> Add to Lookbook</button>
                            </div>

                            <button type="button" class="product-content__compare-btn"><i class="far fa-compress-alt"></i> Add to Compare</button>

                        </form>

                    </div>
                    
                </div>

            </div>
            
            <div class="product-details">
                <tabs>
                    <tab name="Description">
                        <p class="product-details__title">Nunc egestas posuere enim, eu maximus erat posuere eget</p>
                        <p>Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.</p>
                        <p>Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.</p>
                    </tab>
                    <tab name="Video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default {
    name: 'product',
    components: {
        PageTitle
    },

    data () {
        return {
            quantity: 1
        }
    },

    methods: {
        increment () {
            this.quantity++
        },

        decrement () {
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
    .product-info {
        display: flex;
        justify-content: space-between;
        margin-top: 55px;
    }

    .product-gallery {
        width: 50%;
        height: 710px;
        margin-right: 15px;
        background-color: lightgray;
    }

    .product-data {
        width: 50%;
        margin-left: 15px;

        &__title {
            margin: 0;
            font-weight: 500;
            color: #575153;
            text-transform: uppercase;
            font-size: 1.4em;
        }

        &__price {
            font-size: 2.2em;
            font-weight: 300;
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
        color: #727272;
        font-weight: 500;

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
                    color: #00c8c8;
                }
            }
        }
    }

    .product-reviews {
        display: flex;
        margin-right: 10px;

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
            color: #8c8c8c;

            &--heading {
                color: #575153;
                font-weight: 700;
                text-transform: uppercase;
            }

            a {
                color: #00c8c8;
                text-decoration: none;
                transition: 0.1s;

                &:hover {
                    color: #8c8c8c;
                }
            }
        }

        &__description {
            font-family: 'Roboto', sans-serif;
            font-size: 1.1em;
            line-height: 1.5em;
            margin: 30px 0;
            color: #8e8c8c;

            ul {
                padding: 0 20px;
            }
        }

        &__compare-btn {
            border: 0;
            padding: 0;
            margin-top: 30px;
            color: #737373;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 1.2em;
            letter-spacing: 2px;
            z-index: 3;
            transition: 0.2s;
            cursor: pointer;
            transition: 0.1s;

            .far {
                background-color: #727272;
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
                color: #00c8c8;

                .far {
                    background-color: #00c8c8;
                }
            }
        }
    }

    .product-options {
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin-top: 50px;

        &__select-box {
            position: relative;
            width: 170px;
            border: 1px solid #e7e7e7;
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
            font-weight: 700;
            text-transform: uppercase;
            color: #575153;
            margin-bottom: 10px;
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
            border: 1px solid #e7e7e7;
            border-right: 0;
            cursor: default;
            color: #989898;
        }

        &__buttons {
            button {
                display: block;
                border: 1px solid #e7e7e7;
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

        &__cta {
            border: 2px solid #737373;
            padding: 15px 30px;
            color: #737373;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 1.2em;
            letter-spacing: 2px;
            z-index: 3;
            transition: 0.2s;
            cursor: pointer;

            &--submit {
                &:hover {
                    border-color: #333333;
                    background-color: #333333;
                    color: #fff;
                }
            }

            &--lookbook {
                &:hover {
                    border-color: #00c8c8;
                    background-color: #00c8c8;
                    color: #fff;
                }
            }
        }
    }

    .product-details {
        &__title {
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            color: #727272;
            font-weight: 500;
        }
        
        .tabs-component {
            margin: 4em 0;
        }

        .tabs-component-tabs {
            background-color: #f8f8f8;
            margin: 0;
        }

        @media (min-width: 700px) {
            .tabs-component-tabs {
                padding: 0;
                border: 0;
                align-items: stretch;
                display: flex;
                justify-content: flex-start;
            }
        }

        .tabs-component-tab {
            text-transform: uppercase;
            color: #575153;
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            font-weight: 600;
            margin-right: 0;
            list-style: none;
        }

        .tabs-component-tab.is-active {
            color: #fff;
            background-color: #333333;
        }

        .tabs-component-tab.is-disabled * {
            color: #cdcdcd;
            cursor: not-allowed !important;
        }

        @media (min-width: 700px) {
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
            font-family: 'Roboto', sans-serif;
            font-size: 1.1em;
            line-height: 1.5em;
            color: #8e8c8c;
        }
    }
</style>
