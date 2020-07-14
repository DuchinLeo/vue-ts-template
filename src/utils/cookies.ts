/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 12:12:01
 * @LastEditTime: 2020-07-14 12:18:43
 * @LastEditors: Duchin/梁达钦
 */
import Cookies from 'js-cookie'

// App
const languageKey = 'language'
export const getLanguage = () => Cookies.get(languageKey)

const tokenKey = 'token'

// 获取cookie
export const getCookie = (cookieName: string) => {
  if (cookieName) {
    return Cookies.get(cookieName)
  } else {
    return Cookies.get(tokenKey)
  }
}

// 设置cookie
export const setCookie = (cookieName: string, cookieVal: string) => {
  if (cookieName) {
    return Cookies.set(cookieName, cookieVal)
  } else {
    return Cookies.set(tokenKey, cookieVal)
  }
}

// 移除cookie
export const removeCookie = (cookieName: string) => {
  if (cookieName) {
    return Cookies.remove(cookieName)
  } else {
    return Cookies.remove(tokenKey)
  }
}
