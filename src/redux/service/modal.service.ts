/*
 * @Author: your name
 * @Date: 2021-02-02 14:17:05
 * @LastEditTime: 2021-02-02 14:52:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\service\modal.service.ts
 */
export const ModalService = {
  showModalService,
  hideModalService,
  readModalService
}

function showModalService () {
  console.log('Modal为true');
  
}

function hideModalService () {
  console.log('Modal为false');
  
}

function readModalService () {
  console.log('读取Modal的状态');
  
}