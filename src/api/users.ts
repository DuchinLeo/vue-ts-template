/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-15 11:42:28
 * @LastEditTime: 2020-07-15 11:46:54
 * @LastEditors: Duchin/梁达钦
 */
import require from '@/utils/request'

export const login = (data: any) => {
  require({
    url: '/users/login',
    method: 'post',
    data
  })
}
export const getUserInfo = (data: any) => {
  require({
    url: '/users/info',
    method: 'post',
    data
  })
}
export const logout = () => {
  require({
    url: '/users/logout',
    method: 'post'
  })
}
