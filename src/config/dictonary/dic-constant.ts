export interface DictionaryWarp {
  // 字典码
  code: any;
  // 字典意义
  name: any;
}

export const isRegister: DictionaryWarp[] = [
  {code: '-1', name: '尚未注册'},
  {code: '1', name: '已经注册'}
]