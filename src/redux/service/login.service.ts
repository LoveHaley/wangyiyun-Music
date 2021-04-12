/*
 * @Author: your name
 * @Date: 2021-01-30 23:44:42
 * @LastEditTime: 2021-02-01 02:24:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\service\login.service.ts
 */
export const loginService = {
  saveUserInfo,
  modalVisStatus,
  readUserInfo
}

function saveUserInfo () {
  console.log('您已经登录成功');
}

function modalVisStatus () {
  console.log('更改Modal状态成功');
}

function readUserInfo () {
  console.log('读取用户信息');
  
}