/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 18:02:10
 * @LastEditTime: 2020-07-14 18:06:07
 * @LastEditors: Duchin/梁达钦
 */
import request from '@/utils/request'

export const getUserInfo = (data: any) =>
  request({
    url: '/users/info',
    method: 'post',
    data
  })
