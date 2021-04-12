/*
 * @Author: your name
 * @Date: 2021-01-30 23:50:39
 * @LastEditTime: 2021-02-02 14:39:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\action\login.action.ts
 */
//在每个函数的结束都需要返回一个类型

import { loginService } from '../service'

import { LoginConstant } from '../constant'
import { UserInfo } from '../../config/interface/common';

export const loginAction = {
  saveUserInfo,
  readUserInfo
}

function saveUserInfo(item: UserInfo) {
  loginService.saveUserInfo();
  return { type: LoginConstant.SAVE_USERINFO, data: item }
}

function readUserInfo () {
  loginService.readUserInfo();
  return { type: LoginConstant.READ_USERINFO }
}