/*
 * @Author: shi
 * @Date: 2021-01-29 21:47:19
 * @LastEditTime: 2021-02-02 15:39:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\reducer\login.reducer.ts
 */
import { LoginConstant } from '../constant';

const initialState = { data: {}, status: ''}

export function userInfo(state = initialState, action: any): any {

  switch(action.type) {
    case LoginConstant.SAVE_USERINFO:
      return {
        data: { ...action.data },
        status: 'success'
      }
    case LoginConstant.READ_USERINFO:
      return {
        data: state,
        status: 'success'
      }
    default:
      return state;
  }
}
