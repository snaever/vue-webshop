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
    .page-title {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        height: 450px;
        background-color: lightgray;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

        &__heading {
            width: 100%;
            font-size: 3.2em;
            font-weight: 700;
            text-transform: uppercase;
            color: #fff;
            margin: 0 0 20px 0;

            &--light {
                font-weight: 300;
            }
        }

        &__subheading {
            text-transform: uppercase;
            font-weight: 400;
            font-size: 1.8em;
            color: #fff;
            margin: 0;
        }
    }
</style>

