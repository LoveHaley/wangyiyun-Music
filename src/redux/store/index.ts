/*
 * @Author: your name
 * @Date: 2021-01-29 15:22:56
 * @LastEditTime: 2021-01-29 15:48:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\redux\store\index.ts
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer/index';

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)