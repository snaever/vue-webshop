<template>
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
    .nav-bar {
        position: fixed;
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
