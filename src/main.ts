/*
 * @Description: main
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 11:58:11
 * @LastEditTime: 2020-07-15 17:40:18
 * @LastEditors: Duchin/梁达钦
 */
// import { DirectiveOptions } from 'vue/types/umd'
import Vue, { DirectiveOptions } from 'vue'

import ElementUI from 'element-ui'
import '@/icons'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from './App.vue'
import './pwa/registerServiceWorker'
import router from './router'
import store from './store'

import i18n from '@/lang'
import '@/permission'
import * as directives from '@/directives'
import * as filters from '@/filters'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
})

// 注册全局指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key])
})

// 注册全局过滤器函数
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key])
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
