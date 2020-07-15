/*
 * @Description: 权限
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-15 11:50:02
 * @LastEditTime: 2020-07-15 18:00:14
 * @LastEditors: Duchin/梁达钦
 */
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'
// import { PermissionModule } from '@/store/modules/permission'
import i18n from '@/lang' // Internationalization
import settings from './settings'
import { getPageTitle } from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/', '/about']

router.beforeEach(async(to: Route, form: Route, next: any) => {
  // Start progress bar
  NProgress.start()

  // Determine whether the user has logged in
  if (UserModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // Other processing
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach((to: Route) => {
  NProgress.done()

  // set page title
  document.title = getPageTitle(to.meta.title)
})
