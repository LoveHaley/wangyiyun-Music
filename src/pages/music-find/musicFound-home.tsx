/*
 * @Author: your name
 * @Date: 2021-01-20 22:51:00
 * @LastEditTime: 2021-02-03 09:15:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\pages\music-find\musicFound-home.tsx
 */
import React from 'react';
import { Tabs } from 'antd';
import '../../style/music-home.less';
import { Recommend } from './recommend';

export const MusicFound = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='个性推荐' key='1'>
          <Recommend />
        </TabPane>
        <TabPane tab='歌单' key='2'>
          content of Tab pan 2
        </TabPane>
        <TabPane tab='主播电台' key='3'>
          content of Tab pan 3
        </TabPane>
        <TabPane tab='排行榜' key='4'>
          content of Tab pan 3
        </TabPane>
        <TabPane tab='歌手' key='5'>
          content of Tab pan 3
        </TabPane>
        <TabPane tab='最新音乐' key='6'>
          content of Tab pan 3
        </TabPane>
      </Tabs>
    </>
  );
}