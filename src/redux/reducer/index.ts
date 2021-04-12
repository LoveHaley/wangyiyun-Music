/*
 * @Author: your name
 * @Date: 2021-01-29 15:19:43
 * @LastEditTime: 2021-02-02 14:36:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\reducer\index.ts
 */
import { combineReducers } from 'redux';
import { userInfo } from './login.reducer';
import { modalStatus } from './modal.reducer';

const rootReducer = combineReducers({
  userInfo,
  modalStatus
});
export default rootReducer;