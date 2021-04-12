/*
 * @Author: your name
 * @Date: 2021-02-02 14:25:18
 * @LastEditTime: 2021-02-02 14:33:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\reducer\modal.reducer.ts
 */
import { ModalConstant } from '../constant/modal.constant';

const initialState = { modalCond: false } 

export function modalStatus (state = initialState, action: any ) {
  switch(action.type) {
    case ModalConstant.SHOW_MODAL:
      return {
        modalCond: true
      }
    
    case ModalConstant.HIDE_MODAL:
      return {
        modalCond: false,
      }
    
    default:
      return state;
  }
}
