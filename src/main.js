import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import {Tabs, Tab} from 'vue-tabs-component'
import VueYouTubeEmbed from 'vue-youtube-embed'
/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart, faHeart as fasHeart, faStar, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompressAlt } from '@fortawesome/pro-solid-svg-icons'
import { faHeart as falHeart, faAngleDown, faAngleUp } from '@fortawesome/pro-light-svg-icons'
import { faEnvelope, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart as farShoppingCart, faCompressAlt as farCompressAlt, faArrowRight, faBars, faTimes } from '@fortawesome/pro-regular-svg-icons'
import { faFacebookF, faTwitter, faGooglePlusG, faPinterestP, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faShoppingCart, fasHeart, faCompressAlt, falHeart, faStar, faFacebookF, faTwitter, faGooglePlusG, faPinterestP, faPinterest, faInstagram, faEnvelope, faAngleDown, faAngleUp, farShoppingCart, farHeart, farCompressAlt, faArrowRight, faBars, faTimes, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.use(VeeValidate);
Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js');
  });
}