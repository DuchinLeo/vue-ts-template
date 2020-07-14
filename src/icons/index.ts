/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 14:21:50
 * @LastEditTime: 2020-07-14 17:58:56
 * @LastEditors: Duchin/梁达钦
 */

import Vue from 'vue'
import svgIcon from './components/SvgIcon.vue'
import { RequireContext } from '@/type/comon/common.interface.ts'
// 挂载在全局
Vue.component('svg-icon', svgIcon)
const requireAll = (requireContext: RequireContext) => {
  return requireContext.keys().map(requireContext)
}

const req = require.context('./svg', false, /\.svg$/)
console.log(req)
requireAll(req)
