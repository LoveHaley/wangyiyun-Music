/*
 * @Author: your name
 * @Date: 2021-02-03 12:05:36
 * @LastEditTime: 2021-02-04 17:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\config\interface\recommend.ts
 */
export interface BannerInfo {
  // 图片地址
  imageUrl: string;
  // 标题颜色
  titleColor: string;
  // 标题
  typeTitle: string;
}

export interface RemdMusicInfo {
  // 是否已经尝试过
  hasTaste: boolean;
  // 状态码
  code: number,
  // 类别
  category: number,
  // 结果信息
  result: [
    {
      // 歌单ID
      id: string;
      // 类别
      type: number;
      // 歌单名称
      name: string;
      // 版权信息
      copywriter: string;
      // 图片地址
      picUrl: string;
      // 是否可以不喜欢
      canDislike: boolean;
      // 未知
      trackNumberUpdateTime: string;
      // 播放次数
      playCount: number;
      // 观看次数
      trackCount: number;
      // 高质量
      highQuality: boolean;
      // 未知
      alg: string;
    }
  ]
}

export interface Exclusive {
  // 状态码
  code: number;
  // 名称
  name: string;
  // 搜索结果
  result: [{
    // 结果ID
    id: string;
    // 地址
    url?: string;
    // 图片地址
    picUrl: string;
    // 小缩略图地址
    sPicUrl?: string;
    // 类型
    type: number;
    // 版权作者
    copywriter?: string;
    // 推送名称
    name: string;
    // 未知
    alg: string;
  }]
}
