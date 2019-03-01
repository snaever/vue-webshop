<template>
  <div class="login">
    <page-title bg="assets/img/brand-header.jpg">
      <h1 class="page-title__heading" slot="heading">Welcome <span class="page-title__heading--light">to AVE</span></h1>
      <p class="page-title__subheading" slot="subheading">Sign in or register</p>
    </page-title>

    <div class="content-container">
        <div class="forms">

            <div class="forms__content">
                <p class="forms__title">Sign in</p>
                <form @submit.prevent="validateForm('signin')" novalidate data-vv-scope="signin">

								<input class="forms__entry" :class="{'input': true, 'forms__entry--error': errors.has('signin.login_email') }" type="text" name="login_email" id="login_email" placeholder="Your email.." v-model.lazy="login_email" v-validate="'required|email'">
								<span class="forms__error-msg" v-show="errors.has('signin.login_email')">{{ errors.first("signin.login_email") }}</span>
								<input class="forms__entry" :class="{'input': true, 'forms__entry--error': errors.has('signin.login_password') }" type="password" name="login_password" id="login_password" placeholder="Your password.." v-model.lazy="login_password" v-validate="'required'">
								<span class="forms__error-msg" v-show="errors.has('signin.login_password')">{{ errors.first("signin.login_password") }}</span>

								<div class="forms__actions">
									<button class="forms__submit" type="submit">Sign in</button>
									<a href="#" class="forms__forgot">Forgot your password <i class="far fa-arrow-right"></i></a>
								</div>

                </form>
            </div>

            <div class="forms__content">
                <p class="forms__title">Register</p>
                <form @submit.prevent="validateForm('register')" novalidate data-vv-scope="register">

								<input class="forms__entry" :class="{'input': true, 'forms__entry--error': errors.has('register.register_email') }" type="text" name="register_email" id="register_email" placeholder="Your email.." v-model.lazy="register_email" v-validate="'required|email'">
								<span class="forms__error-msg" v-show="errors.has('register.register_email')">{{ errors.first("register.register_email") }}</span>
								<input class="forms__entry" :class="{'input': true, 'forms__entry--error': errors.has('register.register_password') }" type="password" name="register_password" id="register_password" placeholder="Your password.." v-validate="'required'" ref="password">
								<span class="forms__error-msg" v-show="errors.has('register.register_password')">{{ errors.first("register.register_password") }}</span>
								<input class="forms__entry" :class="{'input': true, 'forms__entry--error': errors.has('register.register_confirm') }" type="password" name="register_confirm" id="register_confirm" placeholder="Confirm password.." v-validate="'required|confirmed:password'">
								<span class="forms__error-msg" v-show="errors.has('register.register_confirm')">{{ errors.first("register.register_confirm") }}</span>

                    <div class="checkbox pretty p-default p-smooth">
                        <input class="checkbox__input" type="checkbox" name="register_newsletter" id="register_newsletter" value="Yes">
                        <div class="state p-info-o">
                            <label class="checkbox__label" for="register_newsletter">
                              <p class="checkbox__text">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p>
                            </label>
                        </div>
                    </div>

                  <div class="forms__actions">
                    <button class="forms__submit" type="submit">Create account</button>
                    <p class="forms__accept">By clicking 'Create Account', you agree to our <a href="#" class="forms__forgot">Privacy Policy <i class="far fa-arrow-right"></i></a></p>
                  </div>

                </form>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
	import PageTitle from '@/components/PageTitle.vue'

	export default {
		name: 'login',
		components: {
			PageTitle
		},

		methods: {
			validateForm(scope) {
				this.$validator.validateAll(scope).then((result) => {
					if (result) {
						alert('Form submitted without errors!');
					}
				});
			}
		}
	}

	import { Validator } from 'vee-validate';
	const dictionary = {
		en: {
			attributes: {
			login_email: 'email address',
			register_email: 'email address',
			login_password: 'password',
			register_password: 'password',
			register_confirm: 'password'
			}
		}
	};

	Validator.localize(dictionary);
</script>

<style lang="scss">
@import '~pretty-checkbox/src/pretty-checkbox.scss';

    .forms {
        margin-top: 55px;
        display: flex;
        justify-content: space-between;

		&__content {
			width: 50%;

			&:first-child {
				padding-right: 30px;
				border-right: 1px solid #eeeeee;
			}

			&:last-child {
				padding-left: 30px;
			}
		}

        &__title {
            font-weight: 500;
            text-transform: uppercase;
            color: #575153;
            font-size: 1.4em;
            margin: 0 0 20px 0;
        }

        &__entry {
			width: 100%;
			height: 40px;
			margin-top: 30px;
			padding-left: 10px;
			border: 1px solid #e7e7e7;
			box-sizing: border-box;

			&::placeholder {
				color: #989898;
			}

			&--error {
				border-color: #bb5465;
				background-color: #fcf6f7;
			}
		}
		
		&__error-msg {
			color: #bb5465;
			line-height: 2em;
			font-size: 0.9em;
		}

        &__actions {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 30px;
        }

        &__submit {
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

            &:hover {
                border-color: #00c8c8;
                background-color: #00c8c8;
                color: #fff;
            }
        }

        &__forgot {
			color: #00c8c8;
			text-decoration: none;
			font-weight: 500;
			transition: 0.1s;

			&:hover {
			color: #737373;
			}
        }

        &__accept {
			width: 230px;
			text-align: right;
			line-height: 1.4em;
			color: #8e8c8c;
		}
    }

    .checkbox {
		height: 18px;
		margin-top: 30px;

		&__label {
			font-size: 1.4em;
		}

		&__text {
			margin: 0;
			font-size: 13px;
			line-height: 18px;
			color: #8e8c8c;
		}
    }
</style>
