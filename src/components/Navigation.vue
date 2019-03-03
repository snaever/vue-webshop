<template>
    <div>
        <div class="top-spacing"></div>
        <div class="top-bar">
            <div class="content-container">
                <div class="bar-content">
                    <div class="bar-content__currency">
                        <a href="#">
                            Currency: GBP
                            <font-awesome-icon :icon="['fal', 'angle-down']" />
                        </a>
                    </div>
                    <nav class="bar-content__account">
                        <router-link to="/login">Register</router-link>
                        <router-link to="/login">Sign in</router-link>
                    </nav>
                    <div class="bar-content__cart">
                        <a href="#">
                            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                            empty
                            <font-awesome-icon :icon="['fal', 'angle-down']" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-bar" id="nav-bar">
            <div class="site-container">
                <div class="nav-content">
                    <p class="nav-content__branding">
                        <router-link class="logo" to="/">AVENUE <span class="nav-content__branding--light">FASHION</span></router-link>
                    </p>

                    <div class="nav-content__mobile-btn mobile" v-on:click="showing = !showing">
                        <font-awesome-icon :icon="['far', 'bars']" />
                    </div>

                    <div class="mobile-nav" v-bind:class="{'active' : showing }">
                        <div class="mobile-nav__header">

                            <div class="mobile-nav__search">
                                <input type="search" name="mobile_search" id="mobile_search" placeholder="Search..">
                                <font-awesome-icon :icon="['fas', 'search']" />
                            </div>

                            <div class="mobile-nav__close" v-on:click="showing = !showing">
                                <font-awesome-icon :icon="['far', 'times']" />
                            </div>
                        </div>

                        <nav class="mobile-links">
                            <div class="mobile-links__item">
                                <router-link class="mobile-links__link" to="/">Home</router-link>
                            </div>

                            <div class="mobile-links__item">
                                <a href="#" class="mobile-links__link">Mens</a>
                                <a class="mobile-links__subsection">Casuals</a>
                                <ul class="mobile-links__submenu">
                                    <li>
                                        <a href="#">Jackets</a>
                                    </li>
                                    <li>
                                        <a href="#">Hoodies &amp; Sweatshirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Polo Shirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Sportswear</a>
                                    </li>
                                    <li>
                                        <a href="#">Trousers &amp; Chinos</a>
                                    </li>
                                    <li>
                                        <a href="#">T-Shirts</a>
                                    </li>
                                </ul>

                                <a class="mobile-links__subsection">Formals</a>
                                <ul class="mobile-links__submenu">
                                    <li>
                                        <a href="#">Jackets</a>
                                    </li>
                                    <li>
                                        <a href="#">Shirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Suits</a>
                                    </li>
                                    <li>
                                        <a href="#">Trousers</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="mobile-links__item">
                                <a href="#" class="mobile-links__link">Womens</a>
                                <a class="mobile-links__subsection">Casuals</a>
                                <ul class="mobile-links__submenu">
                                    <li>
                                        <a href="#">Tops</a>
                                    </li>
                                    <li>
                                        <a href="#">Skirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Jumpers &amp; cardigans</a>
                                    </li>
                                    <li>
                                        <a href="#">Multipacks</a>
                                    </li>
                                    <li>
                                        <a href="#">Jeans</a>
                                    </li>
                                    <li>
                                        <a href="#">T-Shirts</a>
                                    </li>
                                </ul>
                                
                                <a class="mobile-links__subsection">Formal</a>
                                <ul class="mobile-links__submenu">
                                    <li>
                                        <a href="#">Coats</a>
                                    </li>
                                    <li>
                                        <a href="#">Shirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Dresses</a>
                                    </li>
                                    <li>
                                        <a href="#">Shoes</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="mobile-links__item">
                                <router-link class="mobile-links__link" to="/brand">The Brand</router-link>
                            </div>

                            <div class="mobile-links__item">
                                <a class="mobile-links__link" href="#">Local Stores</a>
                            </div>

                            <div class="mobile-links__item">
                                <a class="mobile-links__link" href="#">Look Book</a>
                            </div>
                        </nav>
                    </div>

                    <nav class="nav-content__links desktop">
                        <div class="nav-content__item nav-content__item--has-sub">
                            <a href="#" class="nav-content__link">
                                Mens
                                <font-awesome-icon :icon="['fal', 'angle-down']" />
                            </a>

                            <div class="sub-menu">
                                <div class="sub-menu__wrapper">

                                    <div class="sub-menu__section">
                                        <p class="sub-menu__title">Casuals</p>
                                        <ul class="sub-menu__links">
                                            <li class="sub-menu__single">
                                                <a href="#">Jackets</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Hoodies &amp; Sweatshirts</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Polo Shirts</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Sportswear</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Trousers &amp; Chinos</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">T-Shirts</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="sub-menu__section">
                                        <p class="sub-menu__title">Formal</p>
                                        <ul class="sub-menu__links">
                                            <li class="sub-menu__single">
                                                <a href="#">Jackets</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Shirts</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Suits</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Trousers</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <p class="sub-menu__statement">
                                    Autumn sale!<span class="sub-menu__statement--light">Up to 50% off</span>
                                </p>

                            </div>

                        </div>
                        <div class="nav-content__item nav-content__item--has-sub">
                            <a href="#" class="nav-content__link">
                                Womens
                                <font-awesome-icon :icon="['fal', 'angle-down']" />    
                            </a>

                            <div class="sub-menu">
                                <div class="sub-menu__wrapper">

                                    <div class="sub-menu__section">
                                        <p class="sub-menu__title">Casuals</p>
                                        <ul class="sub-menu__links">
                                            <li class="sub-menu__single">
                                                <a href="#">Tops</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Skirts</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Jumpers &amp; cardigans</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Multipacks</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Jeans</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">T-Shirts</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="sub-menu__section">
                                        <p class="sub-menu__title">Formal</p>
                                        <ul class="sub-menu__links">
                                            <li class="sub-menu__single">
                                                <a href="#">Coats</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Shirts</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Dresses</a>
                                            </li>
                                            <li class="sub-menu__single">
                                                <a href="#">Shoes</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <p class="sub-menu__statement">
                                    Clothing crisis?<span class="sub-menu__statement--light">See our multipacks</span>
                                </p>

                            </div>

                        </div>
                        <div class="nav-content__item">
                            <router-link class="nav-content__link" to="/brand">The Brand</router-link>
                        </div>
                        <div class="nav-content__item nav-content__item--has-sub">
                            <a href="#" class="nav-content__link">
                                Local Stores
                                <font-awesome-icon :icon="['fal', 'angle-down']" />
                            </a>
                        </div>
                        <div class="nav-content__item nav-content__item--has-sub">
                            <a href="#" class="nav-content__link">
                                Look Book
                                <font-awesome-icon :icon="['fal', 'angle-down']" />
                            </a>
                        </div>
                    </nav>

                    <div class="nav-content__search">
                        <input type="search" name="search" id="search" placeholder="Search..">
                        <font-awesome-icon :icon="['fas', 'search']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            showing: false
        }
    },
    watch:{
        $route() {
            this.showing = false
        }
    }
}

window.onscroll = function changeNav(){

var scrollPosY = window.pageYOffset | document.body.scrollTop;
var navBar = document.getElementById('nav-bar'); // selects the element by Id

    if(scrollPosY > 100) {
          navBar.className = ('nav-bar scrolled');
    } else if(scrollPosY <= 100) {
         navBar.className =  ('nav-bar');
    }
}
</script>


<style lang="scss">
@import "@/assets/sass/_all.scss";

    .top-spacing {
        padding-top: 115px;

        @media (max-width: $breakpoint-mobile) {
            padding: 0;
        }
    }

    .top-bar {
        position: fixed;
        top: 0;
        height: 45px;
        width: 100%;
        background-color: $dark-grey;
        z-index: 100;

        @media (max-width: $breakpoint-mobile) {
            height: 90px;
            position: relative;
        }
    }

    .bar-content {
        display: flex;
        justify-content: space-between;
        color: $bar-color;
        line-height: 45px;

        @media (max-width: $breakpoint-mobile) {
            flex-wrap: wrap;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        &__currency {
            flex-grow: 2;

            @media (max-width: $breakpoint-tablet) {
                flex-grow: 0;
            }

            a {
                transition: 0.1s;

                &:hover {
                    color: lighten($color: $bar-color, $amount: 20);
                }
            }

            .fa-angle-down {
                margin-left: 9px;
            }
        }

        &__account {
            margin-right: 85px;

            @media (max-width: $breakpoint-mobile) {
                margin: 0;
            }

            a {
                margin-right: 35px;
                transition: 0.1s;

                &:hover {
                    color: lighten($color: $bar-color, $amount: 20);
                }
            }
        }

        &__cart {
            background-color: $accent-color;
            color: #fff;
            padding: 0 23px;
            transition: 0.1s;
            cursor: pointer;

            @media (max-width: $breakpoint-mobile) {
                width: 100%;
            }

            &:hover {
                background-color: darken($color: $accent-color, $amount: 5);
            }

            .fa-shopping-cart {
                margin-right: 23px;
            }

            .fa-angle-down {
                margin-left: 9px;
            }
        }
    }

    .nav-bar {
        position: fixed;
        top: 45px;
        z-index: 100;
        width: 100%;
        padding: 20px 0;
        transition: 0.2s;
        height: 30px;

        @media (max-width: $breakpoint-mobile) {
            background-color: $snow;
            position: relative;
            top: 0;
            height: auto;
        }

        &.scrolled {
            background-color: $snow;
        }
    }

    .nav-content {
        display: flex;
        justify-content: space-between;

        &__branding {
            margin: 0;
            font-size: 2em;
            font-weight: $w-bold;
            flex-grow: 2;

            @media (max-width: $breakpoint-tablet) {
                flex-grow: 0;
            }

            &--light {
                font-weight: $w-regular;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
        }

        &__links {
            display: flex;
        }

        &__link {
            color: $dark-grey;
            text-decoration: none;
            text-transform: uppercase;
            margin-right: 60px;
            font-size: 1em;
            line-height: 30px;
            transition: 0.1s;

            &:hover {
                color: $accent-color;
            }
        }

        .router-link-exact-active:not(.logo) {
            color: $accent-color;
        }

        &__item {
            padding-bottom: 20px;

            &--has-sub {
                position: relative;

                .nav-content__link {
                    position: relative;

                    .fa-angle-down {
                        position: absolute;
                        top: 20px;
                        left: -5px;
                    }
                }

                &:hover {
                    .sub-menu {
                        visibility: visible;
                        opacity: 1;
                        transition-delay: 0s;
                        top: 50px;
                    }

                    .nav-content__link {
                        color: $accent-color;
                    }
                }
            }
        }

        &__search {
            margin-left: 115px;

            @media (max-width: $breakpoint-tablet) {
                margin-left: 0;
            }

            @media (max-width: $breakpoint-mobile) {
                display: none;
            }

            input {
                width: 190px;
                height: 30px;
                padding: 0 27px 0px 10px;
                border: 1px solid $input-border;
            }

            .fa-search {
                position: relative;
                left: -23px;
                transition: 0.1s;
                cursor: pointer;
                color: #a5a5a5;

                &:hover {
                    color: $accent-color;
                }
            }
        }
    }

    .sub-menu {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s linear 0.2s, opacity 0.2s linear, top 0.1s linear;
        position: absolute;
        top: 80px;
        left: -5px;
        min-width: 300px;
        background-color: $snow;
        box-shadow: 0px 11px 24px rgba(0,0,0,0.4);
        z-index: 100;

        &__wrapper {
            display: flex;
            padding: 30px;
        }

        &__title {
            margin: 0 0 30px 0;
            text-transform: uppercase;
            color: $heading;
        }

        &__links {
            list-style-type: none;
            padding: 0;
            min-width: 200px;
        }

        &__single {
            color: $grey;
            margin-top: 10px;
            font-weight: $w-light;
            font-size: 1.1em;

            a {
                color: inherit;
                text-decoration: none;
            }
        }

        &__statement {
            margin: 0px 30px 30px 30px;
            padding: 54px 15px;
            text-align: center;
            text-transform: uppercase;
            font-size: 2em;
            font-weight: $w-bold;
            background-color: $dark-grey;
            color: #FFF;
            letter-spacing: 2px;
            line-height: 1.2em;

            &--light {
                display: block;
                font-weight: $w-light;
            }
        }
    }

    .mobile-nav {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: $snow;
        padding: 20px;
        box-sizing: border-box;

        &.active {
            display: block;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__search {
            input {
                width: 190px;
                height: 30px;
                padding: 0 27px 0px 10px;
                border: 1px solid $input-border;
            }

            .fa-search {
                position: relative;
                left: -23px;
                transition: 0.1s;
                cursor: pointer;
                color: #a5a5a5;

                &:hover {
                    color: $accent-color;
                }
            }
        }

        &__close {
            font-size: 2em;
            color: $heading;
        }
    }

    .mobile-links {
        max-height: 95%;
        overflow: scroll;

        &__item {
            margin-top: 25px;
        }

        &__link {
            color: inherit;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1.3em;
        }

        &__subsection {
            margin-top: 10px;
            padding-left: 10px;
            text-transform: uppercase;
            display: block;
        }

        &__submenu {
            list-style-type: none;
            padding-left: 30px;

            li {
                margin-bottom: 10px;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
        }
    }
</style>
