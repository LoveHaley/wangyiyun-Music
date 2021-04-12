/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: your name
 * @Date: 2021-01-21 16:35:41
 * @LastEditTime: 2021-02-02 15:01:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\components\login\login.tsx
 */
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../../style/login.less';
import { QRLogin } from './qrLogin';
import { FromModel } from './form';
import { RegisterModel } from './register';
import { Verify } from './verify';
import { InitUserInfo } from './initInfo';
import { ModalStatus } from '../../redux/action/modal.action';


// 需要传入是否展示的变量,和关闭的函数
export const ModalService = (props: any) => {
  const [okLoading, setLoading] = useState(false);
  const modalVisStatus = useSelector((state: any) => state.modalStatus.modalCond)
  const dispatch = useDispatch(); 

  useEffect(() => {
    setLoading(false);
  }, [])

  useEffect(() => {
    dispatch(ModalStatus.readModalStatus())
  }, [])

  const handleOk = () => {
    setLoading(true);
    props.closeModal();
  }

  const handleCancel = () => {
    dispatch(ModalStatus.hideModal())
    props.closeModal();
  }


  return (
    <Modal
    visible = { modalVisStatus }
    confirmLoading = { okLoading }
    width = '370px'
    bodyStyle={{height: 580}}
    footer = { null }
    onOk={handleOk}
    destroyOnClose = {true}
    onCancel={handleCancel}>
      <BrowserRouter >
        <Switch>
          <Route path='/qr' component={ QRLogin }/>
          <Route path='/from' component={ FromModel }/>
          <Route path='/register' component={ RegisterModel }/>
          <Route path='/verify' component={ Verify }/>
          <Route path='/InitUserInfo' component={ InitUserInfo }/>
          <Redirect from='*' to='/'/>
        </Switch>
      </BrowserRouter>
    </Modal>
  )
}
