/*
 * @Author: your name
 * @Date: 2021-01-22 15:47:06
 * @LastEditTime: 2021-02-02 15:08:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\components\login\qrLogin.tsx
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { QR_KEY, QR_STATUS, QR_LOGIN_STATUS } from '../../config/url/url';
import { UserInfo } from '../../config/interface/common';
import { qrResponse } from '../../config/interface/login';
import { Button, message } from 'antd';
import HttpService from './../../apis/httpService';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { loginAction, ModalStatus } from '../../redux/action';

export const QRLogin = () => {
  const httpService = new HttpService();
  const [qrImg, setQRImg] = useState(''); 
  const [isShowCloak, setCloak] = useState(false);
  const [count, setCount] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state: any) => state.userInfo.status)
  let StatusTimer: any;
  let isShowTimer: any;

  useEffect(() => {
    isOutofDate();
    httpService.doPost(QR_KEY, {})
    .then((res: qrResponse) => {
      if (res && res.data) {
        const qrkey = res.data.unikey;
        // 获取二维码地址
        if (qrkey && qrkey.length !== 0) {
          axios({
            url: `/login/qr/create?key=${qrkey}&qrimg=true&timerstamp=${Date.now()}`,
            withCredentials: true
          }).then( response => {
            if (response.data.data.qrimg) {
              setQRImg(response.data.data.qrimg);
              askForStatue(qrkey);
            }
          })
        }
      }
    })
  }, [count])

  function askForStatue(qrkey: string) {
    // 不断刷新二维码的状态
    StatusTimer = setInterval(() => {
      httpService.doPost(QR_STATUS, {key: qrkey})
      .then((res: any) => {
        if (res.code === 800) {
          setCloak(true);
          clearInterval(StatusTimer)
        } else if (res.code === 803) {
          message.success('授权登录成功')
          loginStatue();
          clearInterval(StatusTimer);
        }
      })
    }, 3000)
  }

  const isOutofDate = () => {
    isShowTimer = setInterval( () => {
      setCloak(true);
    }, 60000)
  }

  const loginStatue = () => {
    httpService.doPost(QR_LOGIN_STATUS, {})
      .then ((res: UserInfo) => {
        dispatch(loginAction.saveUserInfo(res))
        console.log(result);
        if (result === 'success') {
          dispatch(ModalStatus.hideModal())
        }
      })
  }

  const refresh = () => {
    clearInterval(isShowTimer)
    setCount(count+1);
    setCloak(false);
  }

  const jump = () => {
    clearInterval(StatusTimer);
    clearInterval(isShowTimer);
    history.push('/from')
  }

  return (
    <>
      <p className='qrTitle'>扫码登录</p>
      <div className='qr-container'>
        <div className='qr-picture'>
          <img src={qrImg} alt="" />
          <div className='cloak' style={ isShowCloak ? {display: 'flex'} : {display: 'none'}}>
            <span>二维码生效</span>
            <Button type='primary' onClick={refresh}>点击刷新</Button>
          </div>
        </div>
        <p className='tip'>使用<span>网易云音乐APP</span>扫码登录</p>
      </div>
      <p className='other-login-option' onClick={jump}>
        {`选择其他登录模式>`}
      </p>
    </>
  )
}