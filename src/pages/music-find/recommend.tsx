/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: your name
 * @Date: 2021-02-03 09:04:15
 * @LastEditTime: 2021-02-05 10:40:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\pages\music-find\recommend.ts
 */
import React from 'react';
import { Carousel, Card } from 'antd';
import { CaretRightOutlined, PlayCircleTwoTone } from '@ant-design/icons';
import '../../style/music-find/recommend.less';
import HttpService from './../../apis/httpService';
import { useEffect, useState } from 'react';
import { QUERY_BANNER, QUERY_RECOMMEND_MUSIC_LIST, QUERY_EXCLUSIVE } from '../../config/url/url';
import { BannerInfo } from '../../config/interface/recommend';
import { RemdMusicInfo } from '../../config/interface/recommend';

export const Recommend = () => {
  const [ImgUrl, setImgUrl] = useState([]);
  const [CardInfo, setCardInfo] = useState([{}]);
  const httpService = new HttpService();
  const { Meta } = Card;

  useEffect( () => {
    httpService.doGet(QUERY_BANNER, {type: 0})
      .then( (res: any) => {
        setImgUrl(res.banners)
      })
    
    httpService.doGet(QUERY_RECOMMEND_MUSIC_LIST)
      .then((res: RemdMusicInfo) => {
        console.log(res);
        setCardInfo(res.result);
      })
    
    httpService.doGet(QUERY_EXCLUSIVE)
      .then((res) => {

      })
  }, [])

  const simplify = (count: number) => {
    if (count > 10000) {
      const length = count.toString().length;
      return `${count.toString().slice(0, length - 4)}万`;
    } else if (count > 100000000) {
      const length = count.toString().length;
      return `${count.toString().slice(0, length - 8)}亿`
    } else{
      return count
    }
  }
  return (
    <div className='main-body'>
      <Carousel effect='fade' autoplay className='carousel'>
        {
          ImgUrl.map( (value: BannerInfo) => {
            return (
              <div className='img_container'>
                <img src={value.imageUrl} alt=""/>
                <div className='title' style={{backgroundColor: value.titleColor}}>{value.typeTitle}</div>
              </div>
            )
          })
        }
      </Carousel>
      <div className='recomd_music_list'>
        <div className='head_title'>推荐歌单</div>
        <div className='list_card'>
          {
            CardInfo.map((value: any) => {
              return (
                <Card
                style={{width: 240, margin: 10}}
                cover={
                  <>
                    <div className='cloak'></div>
                    <span className='playCount'><CaretRightOutlined style={{color: '#fff'}}/> {simplify(value.playCount)}</span>
                    <img alt='example' src={value.picUrl} style={{borderRadius: 6}}/>
                    <div className='play'><PlayCircleTwoTone twoToneColor='rgb(207, 101, 101)' style={{fontSize: 36, color: '#fff', position: 'absolute', right: 20, top: 188}}/></div>
                  </>
                }
              >
                <Meta title={value.name}/>  
              </Card>
              )
            })
          }
        </div>
      </div>
      <div className='exclusive'>
        <div className='head_title'>独家放送</div>
        <div className='card_container'>
          <Card
            style={{ width: 400, margin: 10}}
            cover={
              <>
                <img src="https://p2.music.126.net/qRXhfPWFK4zDBFlCsXQJ-Q==/109951165679934259.jpg" alt=""/>
              </>
            }
          >

          </Card>
        </div>
      </div>
    </div>
  )
}
