/*
 * @Author: your shi
 * @Date: 2021-01-17 14:25:05
 * @LastEditTime: 2021-01-31 00:40:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\apis\httpService.ts
 */
import Axios from 'axios';

export default class HttpService {
  axios = Axios;
  constructor() {
    // 设置超时时间
    this.axios.defaults.timeout = 5000
    // 是否允许跨域
    this.axios.defaults.withCredentials = true
    // 基础的URl
      /*********远程服务器地址****** */
    // this.axios.defaults.baseURL = 'https://music.hzbiz.net'
    /*************本地地址********* */
    this.axios.defaults.baseURL = 'http://localhost:4000'
  }
  // 添加头部
  private httpHead = {
    hxrFields: { 
      withCredentials:true
    },
  }

  // 添加时间戳，防止浏览器缓存
  public addTimeStamp(url: string): string {
    url = url + '?'
    if (url.indexOf('?') > -1) {
        if (url.indexOf('timeStamp') < 0) {
            url += 'timeStamp=' + Math.random();
        } else {
            url += 'timeStamp=' + Math.random();
        }
    }
    return url;
  }

  public doPost(url: string, params: object, option?: any) {
    url = this.addTimeStamp(url);
    return new Promise<any>((resolve, reject) => {
      this.axios.post(url, params, {withCredentials:true})
        .then((res: any) => {
          resolve(res.data)
        }).catch((err: any) => {
          reject(err.data)
        })
    })
  }

  public doGet(url: string, param?: any, option?: any) {
    url = this.addTimeStamp(url);
    return new Promise<any>((resolve, reject) => {
      this.axios.get(url, {params: param})
        .then((res: any) => {
          resolve(res.data)
        }).catch((err: any) => {
          reject(err.data)
        })
    })
  }
}