/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: your name
 * @Date: 2021-01-16 16:42:28
 * @LastEditTime: 2021-04-12 12:53:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\index.tsx
 */
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import './index.less';
import reportWebVitals from './reportWebVitals';
import { CloudDownloadOutlined, StarOutlined, WifiOutlined, UsbOutlined, CloudOutlined, MailOutlined, SettingOutlined, SkinOutlined } from '@ant-design/icons';
import { MusicFound } from './pages/music-find/musicFound-home';
import { ModalService } from './components/login/login';
import { loginAction } from './redux/action';
import { UserInfo } from './config/interface/common';
import { useEffect } from 'react';
import { ModalStatus } from './redux/action'

const App = () => {
  const userInformation: UserInfo = useSelector((state: any) => state.userInfo.data.data)
  const [isShowModal, setModalStatus] = useState(false);
  const dispatch = useDispatch();
  const [nickname, setNickName] = useState(localStorage.nickName);
  const [avatarImgUrl, setImgUrl] = useState(localStorage.avatarUrl);

  useEffect(() => {
    if (userInformation !== undefined) {
      if (userInformation.profile !== undefined) {
        if (userInformation.profile.nickname !== undefined) {
          localStorage.nickName = userInformation.profile.nickname
          localStorage.avatarUrl = userInformation.profile.avatarUrl
          setNickName(userInformation.profile.nickname)
          setImgUrl(userInformation.profile.avatarUrl)
        }
      }
    }
  })

  useEffect(() => {
    dispatch(loginAction.readUserInfo());
  }, [])

  const showLoginModal = () => {
    if (!nickname) {
      dispatch(ModalStatus.showModal());
    }
  }

  const closeLoginModal = () => {
    setModalStatus(false);
  }
  return (
    <>
      <div className='top-nav'>
      <div className='container'>
        <div className='left-box'>

        </div>
        <div className='right-box'>
            <ul>
              <li onClick={showLoginModal} style={{width: '100px', fontSize: '14px'}}>
                <img src={avatarImgUrl} alt="" style={{marginRight: '5px'}} />
                { nickname? nickname : '登录/注册' }
              </li>
              <li><SettingOutlined /></li>
              <li><SkinOutlined/></li>
              <li><MailOutlined/></li>
            </ul>
        </div>
        <ModalService  showModal={isShowModal} closeModal={closeLoginModal} />
      </div>
      </div>
      <div className='main-part'>
      <div className='side-nav'>
        <ul className='sys-function'>
          <li>发现音乐</li>
          <li>视频</li>
          <li>朋友</li>
          <li>直播</li>
          <li>私人FM</li>
          <span className='myMusice'>我的音乐</span>
          <li><UsbOutlined/>本地音乐</li>
          <li><CloudDownloadOutlined />下载管理</li>
          <li><CloudOutlined />我的音乐云盘</li>
          <li><WifiOutlined />我的电台</li>
          <li><StarOutlined />我的收藏</li>
          <span className='myMusice'>创建的歌单</span>
          <span className='myMusice'>收藏的歌单</span>
        </ul>
      </div>
      <div className='show-box'>
        {/* 需要放置抽象组件 */}
        <MusicFound/>
      </div>
    </div>
      <div className='foot-musicPlay'>

      </div>
    </>
  )
}
ReactDOM.render(
  <Provider store={store}>
      <App/>
      {/* <CustomHookDemo /> */}
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
