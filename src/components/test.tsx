/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: your name
 * @Date: 2021-01-16 22:08:59
 * @LastEditTime: 2021-01-30 13:54:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\components\test.tsx
 */
import React from 'react';
import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { exampleAction } from '../redux/action/example';

export default function CustomHookDemo() {

    const msg = useSelector((state: any) => state.userInfo.username)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('组件被创建了');
        console.log('所取得的state', msg);
        return () => {
            console.log('组件被销毁了');
        }
    }, [msg])

    
    const send = () => {
        dispatch(exampleAction.login())
    }

    return (
        <div className='box '>
            <h2>CustomHookDemo</h2>
            <button onClick={send}>发送</button>
        </div>
    )
}