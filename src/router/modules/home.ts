/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 18:17:59
 * @LastEditTime: 2020-07-14 18:27:49
 * @LastEditors: Duchin/梁达钦
 */
import { RouteConfig } from 'vue-router'

const homeRouter: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "bar-chart" */ '@/views/Home.vue'),
  }
]

export default homeRouter
