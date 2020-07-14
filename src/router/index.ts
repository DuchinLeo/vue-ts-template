/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 11:58:11
 * @LastEditTime: 2020-07-14 18:28:42
 * @LastEditors: Duchin/梁达钦
 */
import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

// Router module
import homeRouter from './modules/home'

Vue.use(Router)

// const routes: Array<RouteConfig> = [
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

export const constantRoutes: RouteConfig[] = [
  ...homeRouter,
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
  }
]


const createRouter = () => new Router({
  mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
