/*
 * @Description: main
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 11:58:11
 * @LastEditTime: 2020-07-14 16:36:28
 * @LastEditors: Duchin/梁达钦
 */
import Vue from 'vue'

import ElementUI from 'element-ui'
// import SvgIcon from 'vue-svgicon'
import '@/icons'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import i18n from '@/lang'

import App from './App.vue'
import './pwa/registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
})

// Vue.use(SvgIcon, {
//   tagName: 'svgicon'
// })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#app',
//   router,
//   store,
//   i18n,
//   render: h => h(App)
// })
