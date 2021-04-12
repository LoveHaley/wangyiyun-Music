/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: your name
 * @Date: 2021-01-22 15:38:17
 * @LastEditTime: 2021-01-31 00:37:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\components\login\form.tsx
 */
import React, { useState, useEffect } from 'react';
import '../../style/form.less';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';
import { PhoneOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import  LoginUrl  from '../../assets/images/login.png';
import HttpService from './../../apis/httpService';
import { USER_REGISTER } from './../../config/url/url';

export const InitUserInfo = (props: any) => {
  const [verifyCode, setCode] = useState()
  const httpService = new HttpService();
  const msg = useSelector(state => state); // 每次状态的更改订阅的值
  let verifyCodeStr = props.location.search;

  useEffect(() => {
    const index = verifyCodeStr.indexOf('=');
    setCode(verifyCodeStr.substring(index + 1, verifyCodeStr.length))
  }, [])

  console.log(msg);

  const onFinish = (values: any) => {
    httpService.doGet(USER_REGISTER,
    {phone: values.phone, password: values.password, captcha: verifyCode, nickname: values.nickname})
      .then(res => {
        console.log(res);
        // 将所获取到的用户的信息写入redux当中
        // dispatch();
     })     
  }

  return (
    <>
      <Form
      name='login'
      className='login-form'
      initialValues={{ remember: true}}
      onFinish={onFinish}
      >
      <Form.Item>
        <img src={LoginUrl} alt="" className='login-img'/>
      </Form.Item>
      <Form.Item
        name='nickname'
        rules={[{required: true, message: '请输入您的昵称'}]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='输入您的昵称'></Input>
      </Form.Item>
      <Form.Item
        name='phone'
        rules={[{required: true, message: '请输入手机号'}]}
      >
        <Input prefix={<PhoneOutlined  className="site-form-item-icon" />} placeholder='输入手机号'></Input>
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{required: true, message: '输入你的密码'}]}
      >
        <Input prefix={<LockOutlined  className="site-form-item-icon" />} type='password' placeholder='输入密码'></Input>
      </Form.Item>
      <Form.Item>
        <Button type='default' htmlType='submit' className='login-form-button netEase' block={true}>
          确认
        </Button>
      </Form.Item>
    </Form>
  </>
  )
}