/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-15 11:40:39
 * @LastEditTime: 2020-07-15 17:30:04
 * @LastEditors: Duchin/梁达钦
 */
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
// import { login, logout, getUserInfo } from '@/api/users'
import { getCookie, removeCookie } from '@/utils/cookies'
// import router, { resetRouter } from '@/router'
import store from '@/store'
// import { PermissionModule } from './permission'

export interface MUserState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements MUserState {
  public token = getCookie() || ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''

  @Mutation
  private SET_TOKEN (token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME (name: string) {
    this.name = name
  }

  @Action
  public ResetToken () {
    removeCookie()
  }

  @Action
  public async GetUserInfo () {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
  }
}

export const UserModule = getModule(User)
