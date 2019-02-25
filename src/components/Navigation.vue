<template>
    <div class="nav-bar">
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
                    <input type="search" name="search" id="search">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .nav-bar {
        position: fixed;
        z-index: 100;
        width: 100%;
        margin-top: 20px;
    }

    .nav-content {
        display: flex;
        justify-content: space-between;

        &__branding {
            margin: 0;
            font-size: 2em;
            font-weight: 700;

            &--light {
                font-weight: 300;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
        }

        &__links {
            color: black;
        }
    }
</style>
