import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import VueI18nParam from './i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n(VueI18nParam)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
