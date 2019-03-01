<template>
    <div>
       <footer class="site-footer">
            <div class="content-container">
                <div class="footer-content">
                    <div class="footer-content__sitemap">

                        <div class="footer-links">
                            <p class="footer-links__title">Information</p>
                            <ul class="footer-links__nav">
                                <li class="footer-links__single"><a href="#">The brand</a></li>
                                <li class="footer-links__single"><a href="#">Local stores</a></li>
                                <li class="footer-links__single"><a href="#">Customer service</a></li>
                                <li class="footer-links__single"><a href="#">Privacy &amp; cookies</a></li>
                                <li class="footer-links__single"><a href="#">Site map</a></li>
                            </ul>
                        </div>

                        <div class="footer-links">
                            <p class="footer-links__title">Why buy from us</p>
                            <ul class="footer-links__nav">
                                <li class="footer-links__single"><a href="#">Shipping &amp; returns</a></li>
                                <li class="footer-links__single"><a href="#">Secure shopping</a></li>
                                <li class="footer-links__single"><a href="#">Testimonials</a></li>
                                <li class="footer-links__single"><a href="#">Award winning</a></li>
                                <li class="footer-links__single"><a href="#">Ethical trading</a></li>
                            </ul>
                        </div>

                        <div class="footer-links">
                            <p class="footer-links__title">Your account</p>
                            <ul class="footer-links__nav">
                                <li class="footer-links__single"><a href="#">Sign in</a></li>
                                <li class="footer-links__single"><a href="#">Register</a></li>
                                <li class="footer-links__single"><a href="#">View cart</a></li>
                                <li class="footer-links__single"><a href="#">View your lookbook</a></li>
                                <li class="footer-links__single"><a href="#">Track an order</a></li>
                                <li class="footer-links__single"><a href="#">Update information</a></li>
                            </ul>
                        </div>

                        <div class="footer-links">
                            <p class="footer-links__title">Lookbook</p>
                            <ul class="footer-links__nav">
                                <li class="footer-links__single"><a href="#">Latest posts</a></li>
                                <li class="footer-links__single"><a href="#">Men's lookbook</a></li>
                                <li class="footer-links__single"><a href="#">Women's lookbook</a></li>
                                <li class="footer-links__single"><a href="#">Lookbooks RSS feed</a></li>
                                <li class="footer-links__single"><a href="#">View your lookbook</a></li>
                                <li class="footer-links__single"><a href="#">Delete your lookbook</a></li>
                            </ul>
                        </div>

                        <div class="footer-links">
                            <p class="footer-links__title">Contact details</p>
                            <div class="footer-links__contact">
                                <p>Head Office: Avenue Fashion,<br />180-182 Regent Street, London.</p>
                                <p>Telephone: 0123-456-789</p>
                                <p>Email: support@yourwebsite.com</p>
                            </div>
                        </div>
                    </div>

                <div class="footer-blocks">
                    <div class="footer-blocks__box footer-blocks__box--black">
                        <p class="footer-blocks__statement">Award winner <span class="footer-blocks__statement--light">Fashion Awards 2016</span></p>
                    </div>
                    <div class="footer-blocks__box footer-blocks__box--blue">
                        <div class="footer-blocks__social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </footer>

        <div class="copyright-bar">
            <div class="content-container">
                <div class="copyright-content">
                    <p class="copyright-content__trademark">&copy; 2016 Avenue Fashion<span class="copyright-content__trademark--sup">TM</span></p>
                    <p class="copyright-content__credit">Design by RobbyDesigns.com</p>
                    <p class="copyright-content__credit">Dev by Kasper Snæver</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .site-footer {
        background-color: #f8f8f8;
        margin-top: 110px;
    }

    .footer-content {
        padding: 65px 0;

        &__sitemap {
            display: flex;
            justify-content: space-between;
        }
    }

    .footer-links {
        &__title {
            margin: 0 0 40px 0;
            text-transform: uppercase;
            color: #575153;
        }

        &__nav {
            list-style-type: none;
            padding: 0;
        }

        &__single {
            color: #727272;
            margin-top: 10px;

            a {
                color: inherit;
                text-decoration: none;
                transition: 0.1s;

                &:hover {
                    color: darken($color: #727272, $amount: 20);
                }
            }
        }

        &__contact {
            color: #727272;
            line-height: 1.5em;
        }
    }

    .footer-blocks {
        display: flex;
        justify-content: space-between;
        margin-top: 55px;

        &__box {
            width: calc(50% - 15px);
            height: 200px;
            padding: 55px;
            box-sizing: border-box;
            color: #fff;
            text-align: center;

            &--black {
                background-color: #333333;
            }

            &--blue {
                background-color: #00c8c8;
            }
        }

        &__statement {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 2.5em;
            line-height: 1.3em;
            margin: 0;

            &--light {
                display: block;
                font-weight: 300;
            }
        }

        &__social-links {
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 2.5em;
            color: #fff;

            a {
                color: inherit;
                transition: 0.1s;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
    
    .copyright-bar {
        background-color: #333333;
        height: 45px;
    }

    .copyright-content {
        display: flex;
        justify-content: space-between;
        height: 100%;
        line-height: 45px;

        &__trademark {
            position: relative;
            margin: 0;
            color: #999999;
            flex-grow: 2;

            &--sup {
                position: absolute;
                top: -3px;
                font-size: 0.6em;
            }
        }

        &__credit {
            margin: 0 0 0 20px;
            color: #777777;
        }
    }
</style>
