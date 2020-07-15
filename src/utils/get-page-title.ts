/*
 * @Description: page-title
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-15 15:17:20
 * @LastEditTime: 2020-07-15 15:23:49
 * @LastEditors: Duchin/梁达钦
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title

export const getPageTitle = (pageTitle?: string) => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
