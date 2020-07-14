/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 12:05:41
 * @LastEditTime: 2020-07-14 12:05:52
 * @LastEditors: Duchin/梁达钦
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { getLanguage } from '@/utils/cookies'

// element-ui built-in lang
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

// User defined lang da

import enLocale from './en'
import zhLocale from './zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    return cookieLanguage
  }

  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh-CN'
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

export default i18n
