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
                    </div>
                    
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
            font-weight: 400;
            color: #575153;
            text-transform: uppercase;
            font-size: 1.4em;
        }

        &__price {
            font-size: 2.2em;
            font-weight: 100;
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
        font-weight: 400;

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
            margin-top: 30px;
            color: #8e8c8c;

            ul {
                padding: 0 20px;
            }
        }
    }
</style>
