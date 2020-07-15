/*
 * @Description: data
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 11:58:11
 * @LastEditTime: 2020-07-15 12:16:09
 * @LastEditors: Duchin/梁达钦
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { MUserState } from './modules/user'

Vue.use(Vuex)

export interface MRootState {
  user: MUserState
}

// Declare empty store first, dynamically register all modules later. // 首先声明空存储，然后动态注册所有模块。
export default new Vuex.Store<MRootState>({})
