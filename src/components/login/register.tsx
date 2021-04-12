/*
 * @Author: your name
 * @Date: 2021-01-22 15:38:17
 * @LastEditTime: 2021-01-26 18:40:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\components\login\form.tsx
 */
import React from 'react';
import '../../style/form.less';
import { Form, Input, Button, Modal } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons'
import  LoginUrl  from '../../assets/images/phoneLogin.png';
import Back from '../../assets/images/back.png';
import { useHistory } from 'react-router-dom';
import HttpService from './../../apis/httpService';
import { CheckPhone } from '../../config/interface/login'
import { CELL_PHONE_CAPTCHA, CELL_PHONE_CHECK } from './../../config/url/url';

export const RegisterModel = () => {
  const history = useHistory();
  const httpService = new HttpService();

  const onFinish = (values: any) => {
    console.log('Received values of form', values);
    httpService.doGet(CELL_PHONE_CHECK, {phone: values.phoneNum})
    .then((res: CheckPhone) => {
      if (res.exist === -1) {
        httpService.doGet(CELL_PHONE_CAPTCHA, {phone: values.phoneNum})
          .then(res => {
            if (res) {
              history.push(`/verify?phone=${values.phoneNum}`);
            }
          })
      } else if (res.exist === 1) {
        Modal.confirm({
          title: '注册提示',
          content: (
            <>
              账号已经存在,昵称{res.nickname}，是否跳转到登录界面?
            </>
          ),
          onOk: () => {
            history.push('/from')
          },
          onCancel: () => {
            Modal.destroyAll();
          }
        })
      }
    })
  }

  // 返回到二维码登录界面
  const back = () => {
    history.goBack();
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
        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder='请输入手机号'></Input>
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{required: true, message: 'Please input your Password'}]}
      >
        <Input prefix={<LockOutlined  className="site-form-item-icon" />} type='password' placeholder='请设置密码'></Input>
      </Form.Item>
      <span style={{color: '#bfbfbf', position:'absolute', top: 290 }}>密码8-20位，至少包含字母/数字/字符2种组合</span>
      <Form.Item>
        <Button type='default' htmlType='submit' className='login-form-button netEase' block={true} style={{ marginTop: 30}}>
          注册
        </Button>
      </Form.Item>
    </Form>
    <img src={ Back } alt="" className='backButton' onClick={ back } />
  </>
  )
}