/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: your name
 * @Date: 2021-01-22 15:38:17
 * @LastEditTime: 2021-02-02 17:38:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\components\login\form.tsx
 */
import React from 'react';
import '../../style/form.less';
import { Form, Input, Button, message } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons'
import  LoginUrl  from '../../assets/images/phoneLogin.png';
import Back from '../../assets/images/back.png';
import { useHistory } from 'react-router-dom';
import HttpService from './../../apis/httpService';
import { CELL_PHONE_LOGIN } from './../../config/url/url';
import { useDispatch } from 'react-redux';
import { ModalStatus } from '../../redux/action';

export const FromModel = () => {
  const history = useHistory();
  const httpService = new HttpService();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log('Received values of form', values);
    httpService.doGet(CELL_PHONE_LOGIN, {phone: values.phoneNum, password: values.password})
      .then((res: any) => {
        console.log(res);
        if (res.code === 502) {
          message.warning(`${res.message}`)
        } else if (res.code === 200) {
          message.success('登陆成功');
          dispatch(ModalStatus.hideModal())
          localStorage.nickName = res.profile.nickname
          localStorage.avatarUrl = res.profile.avatarUrl
        }
      })
  }

  // 返回到二维码登录界面
  const back = () => {
    history.goBack();
  }

  const register = () => {
    history.push('/register');
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
        name='phoneNum'
        rules={[{required: true, message: 'Please input your Phone'}]}
      >
        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder='Phone Number'></Input>
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{required: true, message: 'Please input your Password'}]}
      >
        <Input prefix={<LockOutlined  className="site-form-item-icon" />} type='password' placeholder='Password'></Input>
      </Form.Item>
      <Form.Item>
        <Button type='default' htmlType='submit' className='login-form-button netEase' block={true}>
          登录
        </Button>
      </Form.Item>
      <Form.Item>
        <a className='login-form-button' onClick={register}>
          注册
        </a>
      </Form.Item>
    </Form>
    <img src={ Back } alt="" className='backButton' onClick={back}/>
  </>
  )
}