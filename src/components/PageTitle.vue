<template>
    <div>
        <div class="page-title" v-bind:style="styleObject">
            <div class="page-title__content">
                <slot name="heading"></slot>
                <slot name="subheading"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["bg"],

    data() {
        return {
            styleObject: {
                'background-image': 'url(' + require('@/' + this.bg) + ')'
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/sass/_all.scss";

    .page-title {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        height: 450px;
        background-color: $snow;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

        @media (max-width: $breakpoint-mobile) {
            height: 210px;
        }

        &__heading {
            width: 100%;
            font-size: 3.2em;
            font-weight: $w-bold;
            text-transform: uppercase;
            color: #fff;
            margin: 0 0 20px 0;

            @media (max-width: $breakpoint-mobile) {
                font-size: 2em;
            }

            &--light {
                font-weight: $w-light;
            }
        }

        &__subheading {
            text-transform: uppercase;
            font-weight: $w-medium;
            font-size: 1.8em;
            color: #fff;
            margin: 0;

            @media (max-width: $breakpoint-mobile) {
                font-size: 1.4em;
            }
        }
    }
</style>

