/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: your name
 * @Date: 2021-01-22 15:38:17
 * @LastEditTime: 2021-01-29 10:44:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\components\login\form.tsx
 */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import '../../style/form.less';
import { Form, Input, Button, message} from 'antd';
import { KeyOutlined } from '@ant-design/icons'
import  LoginUrl  from '../../assets/images/phoneLogin.png';
import Back from '../../assets/images/back.png';
import { useHistory } from 'react-router-dom';
import HttpService from '../../apis/httpService';
import { CELL_PHONE_CAPTCHA, CELL_PHONE_CHECK_CAPTCHA } from '../../config/url/url';

export const Verify = (props: any) => {
  const [phone, setPhone] = useState('')
  const history = useHistory();
  const httpService = new HttpService();
  const intervalRef = useRef<any>(null);
  const [count, changeCount] = useState(59);
  const phoneStr = props.location.search;
  
    // 组件卸载时清除计时器
    useEffect(() => {
      const index = phoneStr.indexOf('=');
      setPhone(phoneStr.substring(index + 1, phoneStr.length)); 
      return () => {
        clearInterval(intervalRef.current);
      };
    }, []);

    useEffect(() => {
      if (count === 59) {
        intervalRef.current = setInterval(() => {
          changeCount((preCount) => preCount - 1);
        }, 1000);
      } else if (count === 0) {
        clearInterval(intervalRef.current);
      }
    }, [count]);

    const onGetCaptcha = useCallback(() => {
      changeCount(59);
      httpService.doGet(CELL_PHONE_CAPTCHA, {phone: phone})
        .then(res => {
          if (res) {
            message.success('发送验证码成功，注意查收')
          }
        })
    }, []);

  const onFinish = (values: any) => {
    console.log('Received values of form', values);
    httpService.doGet(CELL_PHONE_CHECK_CAPTCHA, {phone: phone, captcha: values.verifyCode})
      .then((res: boolean) => {
        if (res) {
          // 跳转到初始化信息界面
          history.push(`/InitUserInfo?capcha=${values.verifyCode}`);
        } else {
          message.error('验证码错误，请重试')
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
        <Form.Item>
          <span style={{paddingLeft: 15}}>为了安全，我们会向你的手机发送短信校验码</span>
        </Form.Item>
        <div style={{display: 'flex'}}>
          <Form.Item
            name='verifyCode'
            rules={[{required: true, message: '请填写验证码'}]}
          >
            <Input prefix={<KeyOutlined  className="site-form-item-icon" />} type='password' placeholder='填写验证码'></Input>
          </Form.Item>
          <Form.Item>
          <Button className='netEase' style={{marginLeft: 60, minWidth: 100}} disabled={!!count} onClick={onGetCaptcha}>
              {count ? `${count} s` : '获取验证码'}
            </Button>
          </Form.Item>
        </div>
        <Form.Item>
          <Button type='default' htmlType='submit' className='login-form-button netEase' block={true}>
            下一步
          </Button>
        </Form.Item>
    </Form>
    <img src={ Back } alt="" className='backButton' onClick={back}/>
  </>
  )
}