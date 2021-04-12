/*
import { QR_STATUS } from './url';
 * @Author: shi-yong
 * @Date: 2021-01-17 14:30:50
 * @LastEditTime: 2021-02-04 16:51:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\config\url\url.ts
 */
// 在每个地址前方加上前缀
const PerHead = '/'

/*********************登录和注册界面URL********************** */
// 二维码key生成接口
export const QR_KEY =  PerHead + 'login/qr/key'
// 二维码获取
export const QR_PRODUCE =  PerHead + 'login/qr/create'
// 二维码登陆状态
export const QR_STATUS =  PerHead + 'login/qr/check'
// 查看登陆状态
export const QR_LOGIN_STATUS =  PerHead + 'login/status'
// 手机号登录
export const CELL_PHONE_LOGIN =  PerHead + 'login/cellphone'
// 手机号注册
export const CELL_PHONE_REGISTER =  PerHead + 'register/cellphone'
// 手机号是否被注册
export const CELL_PHONE_CHECK =  PerHead + 'cellphone/existence/check'
// 发送验证码
export const CELL_PHONE_CAPTCHA =  PerHead + 'captcha/sent'
// 验证验证码
export const CELL_PHONE_CHECK_CAPTCHA =  PerHead + 'captcha/verify'
// 注册用户
export const USER_REGISTER =  PerHead + 'register/cellphone'
/*********************登录和注册界面URL********************** */

/********************个性推荐start*************************** */
// 个性推按banner
export const QUERY_BANNER = PerHead + 'banner'
// 推荐歌单 RECOMMEND_MUSIC_LIST
export const QUERY_RECOMMEND_MUSIC_LIST = PerHead + 'personalized'
// 独家放送
export const QUERY_EXCLUSIVE = PerHead + 'personalized/privatecontent'
/********************个性推荐end*************************** */
