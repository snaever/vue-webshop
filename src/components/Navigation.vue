<template>
    <div>
        <div class="top-bar">
            <div class="site-container">
                <div class="bar-content">
                    <div class="bar-content__currency">
                        <a href="#">
                            Currency: GBP
                            <i class="fal fa-angle-down"></i>
                        </a>
                    </div>
                    <nav class="bar-content__account">
                        <a href="#">Register</a>
                        <a href="#">Signup</a>
                    </nav>
                    <div class="bar-content__cart">
                        <a href="#">
                            <i class="fas fa-shopping-cart"></i>
                            empty
                            <i class="fal fa-angle-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-bar" id="nav-bar">
            <div class="site-container">
                <div class="nav-content">
                    <p class="nav-content__branding">
                        <router-link to="/">AVENUE <span class="nav-content__branding--light">FASHION</span></router-link>
                    </p>

                    <nav class="nav-content__links">
                        <router-link to="/">Mens</router-link>
                        <router-link to="/about">Womens</router-link>
                        <router-link to="/about">The Brand</router-link>
                        <router-link to="/about">Local Stores</router-link>
                        <router-link to="/about">Look Book</router-link>
                    </nav>

                    <div class="nav-content__search">
                        <input type="search" name="search" id="search" placeholder="Search..">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
window.onscroll = function changeNav(){

var scrollPosY = window.pageYOffset | document.body.scrollTop;
var navBar = document.getElementById('nav-bar'); // selects the element by Id

    if(scrollPosY > 200) {
          navBar.className = ('nav-bar scrolled');
    } else if(scrollPosY <= 200) {
         navBar.className =  ('nav-bar');
    }
}
</script>


<style lang="scss">
    .top-bar {
        position: fixed;
        height: 45px;
        width: 100%;
        background-color: #333333;
        z-index: 100;
    }

    .bar-content {
        display: flex;
        justify-content: space-between;
        padding: 0 305px;
        color: #929292;
        line-height: 45px;

        a {
            color: inherit;
            text-decoration: none;
        }

        &__currency {
            flex-grow: 2;

            a {
                transition: 0.1s;

                &:hover {
                    color: lighten($color: #929292, $amount: 20);
                }
            }

            .fa-angle-down {
                margin-left: 9px;
            }
        }

        &__account {
            margin-right: 85px;

            a {
                margin-right: 35px;
                transition: 0.1s;

                &:hover {
                    color: lighten($color: #929292, $amount: 20);
                }
            }
        }

        &__cart {
            background-color: #00c8c8;
            color: #fff;
            padding: 0 23px;
            transition: 0.1s;
            cursor: pointer;

            &:hover {
                background-color: darken($color: #00c8c8, $amount: 5);
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

        &.scrolled {
            background-color: #fff;
        }
    }

    .nav-content {
        display: flex;
        justify-content: space-between;

        &__branding {
            margin: 0;
            font-size: 2em;
            font-weight: 700;
            flex-grow: 2;

            &--light {
                font-weight: 300;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
        }

        &__links {
            a {
                color: #222222;
                text-decoration: none;
                text-transform: uppercase;
                margin-right: 60px;
                font-size: 1em;
                line-height: 30px;
            }
        }

        &__search {
            margin-left: 115px;

            input {
                width: 190px;
                height: 30px;
                padding: 0 27px 0px 10px;
                border: 1px solid #e7e7e7;
            }

            .fa-search {
                position: relative;
                left: -23px;
                transition: 0.1s;
                cursor: pointer;
                color: #a5a5a5;

                &:hover {
                    color: #00c8c8;
                }
            }
        }
    }
</style>
