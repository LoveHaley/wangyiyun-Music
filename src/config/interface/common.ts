/*
 * @Author: shi
 * @Date: 2021-01-28 16:30:31
 * @LastEditTime: 2021-01-28 17:21:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\config\interface\common.ts
 */
// 账号信息
export interface UserInfo {
  //请求状态
  code: number,
  // 账户信息
  account: {
    // 是否是匿名
    anonimousUser: boolean
    ban: number,
    baoyueVersion: number,
    // 创建时间
    createTime: string,
    donateVersion: number,
    // 账户Id
    id: string,
    paidFee: boolean,
    // 账号状态
    status: number,
    // token的版本
    tokenVersion: number,
    // 账户类型
    type: number,
    // 用户名称
    userName: string,
    // VIP类型
    vipType: number,
    whitelistAuthority: number
  },
  // 配置相关信息
  profile: {
    // 账户状态
    accountStatus: number,
    // 账户类型、
    accountType: number,
    anchor: boolean,
    // 授权状态
    authStatus: number,
    // 通过身份验证
    authenticated: boolean,
    // 验证类型
    authenticationTypes: number,
    // 权限
    authority: number,
    avatarDetail?: string,
    // 图片id
    avatarImgId: string,
    // avatar的地址
    avatarUrl: string,
    // 背景图片Id
    backgroundImgId?: string,
    // 背景图片地址
    backgroundUrl?: string,
    // 生日
    birthday?: string,
    // 城市
    city?: string,
    // 创建时间
    createTime?: string,
    // 默认avatar
    defaultAvatar: boolean,
    // 描述
    description?: string,
    // 详细描述
    detailDescription?: string,
    // dj状态
    djStatus: number,
    // 专家标签
    expertTags?: string,
    // 专家
    experts?: any,
    followed: boolean,
    // 性别
    gender: number,
    // 最后登录的IP地址
    lastLoginIP: string,
    // 上次登录的时间
    lastLoginTime?: string,
    // 位置状态
    locationStatus: number,
    // 相互
    mutual: boolean,
    // 昵称
    nickname?: string,
    // 省份
    province?: string,
    // 重定义名称
    remarkName?: string,
    // 简短的用户名称
    shortUserName: string,
    // 签名
    signature?: string,
    // 用户ID
    userId: string,
    // 用户名称
    userName: string,
    // 用户类型
    userType: number,
    // VIP类型
    vipType?: number,
    // VIP类型版本
    viptypeVersion?: string 
  }
}
