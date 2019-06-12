import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./axios"
import './registerServiceWorker'

import VCharts from 'v-charts'
Vue.use(VCharts)

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)


Vue.config.productionTip = false
console.log(process.env.VUE_APP_URL)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
