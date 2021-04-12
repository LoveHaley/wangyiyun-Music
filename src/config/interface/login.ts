// 二维码接口
export interface qrResponse {
  // 当前状态
  code: string;
  // 获取到的数据
  data: { 
    // 当前状态
    code: string;
    // 二维码key
    unikey: string;
  }
}

// 手机号是否被注册
export interface CheckPhone {
  // 接口调用状态
  code: number;
  // 是否被注册
  exist: number;
  // 是否有密码
  hasPassword: boolean;
  // 昵称
  nickname: string;
}


