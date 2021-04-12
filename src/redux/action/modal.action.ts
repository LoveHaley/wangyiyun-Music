/*
 * @Author: your name
 * @Date: 2021-02-02 14:13:56
 * @LastEditTime: 2021-02-02 14:53:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\action\modal.action.ts
 */
import { ModalService } from '../service';
import { ModalConstant } from '../constant';

export const ModalStatus = {
  showModal,
  hideModal,
  readModalStatus,
}

function showModal () {
  ModalService.showModalService();
  return {
    type: ModalConstant.SHOW_MODAL
  }
}

function hideModal() {
  ModalService.hideModalService();
  return {
    type: ModalConstant.HIDE_MODAL
  }
}

function readModalStatus() {
  ModalService.readModalService();
  return {
    type: ModalConstant.READ_MODAL
  }
}
