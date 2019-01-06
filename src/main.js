import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import localStorage from 'vue-localstorage'
import http from '@/http'

Vue.config.productionTip = false

Vue.use(localStorage);

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
