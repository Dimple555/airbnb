import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { RoomWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import classNames from 'classnames'

import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base_ui/indicator';

const theme = createTheme()
const RoomItem = memo((props) => {
  const { itemData,itemWidth = "25%",itemClick} = props
  const [selectIndex,setSelectIndex] = useState(0)
  const sliderRef = useRef()
  // 事件处理逻辑
  function controlClickHandle(isRight = true,e) {
    // 跳转到上一个面板/下一个面板
    isRight? sliderRef.current.next() : sliderRef.current.prev()

    // 最新的索引
    let newIndex = isRight? selectIndex + 1 : selectIndex - 1
    // 左右两边的特殊情况
    const length = itemData?.picture_urls?.length
    if(newIndex < 0) newIndex = length - 1
    if(newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止事件冒泡
    e.stopPropagation()
  }

   /** 子元素的赋值 */
   const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  // 跳转详情页逻辑
  function itemClickHandle() {
    // 如果父组件点击了，才会执行该函数
    if(itemClick) itemClick(itemData)
  }

  // 轮播元素
  const sliderElement = (
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="dot-item" key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
  return (
    <ThemeProvider theme={theme}>
    <RoomWrapper 
    verifyColor={itemData?.verify_info?.text_color || "#39576a"} 
    itemWidth={itemWidth}
    onClick={itemClickHandle}
    >
      <div className="inner">
        { !itemData.picture_urls ? pictureElement: sliderElement }
        <div className="desc">{itemData.verify_info.messages.join(".")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
         <Rating 
         name="read-only" 
         value={itemData.star_rating??5} 
         precision={0.1}
         readOnly 
         sx={{fontSize:"12px", color:"#00848A"}}/>
         <span className='count'>{itemData.reviews_count}</span>
         {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </RoomWrapper>
    </ThemeProvider>
  )
})

RoomItem.propTypes = {
  itemData:PropTypes.object
}

export default RoomItem