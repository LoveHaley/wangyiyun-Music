/*
 * @Author: your name
 * @Date: 2021-01-29 15:58:12
 * @LastEditTime: 2021-01-29 20:50:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\reducer\example.ts
 */
import { example } from '../service/example';
import { UserConstant } from '../constant/example';

export const exampleAction = {
  login,
}

function login() {
  example.login();
  return { type: UserConstant.LOGIN }
}