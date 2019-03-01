import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import {Tabs, Tab} from 'vue-tabs-component'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.use(VeeValidate);
Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
