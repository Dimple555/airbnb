import PropTypes from 'prop-types'
import React, { createRef, memo, useEffect,  useState } from 'react'
import { CSSTransition,SwitchTransition } from 'react-transition-group'
import classNames from 'classnames'
import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '../indicator'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {
  const {pictureUrls,closeClick} = props
  const [currentIndex,setCurrentIndex] = useState(0)
  const [showList,setShowList] = useState(true)
  const [isNext,setIsNext] = useState(true)
  const imgRef= createRef()

  //当图片浏览器展示出来时，滚动的功能消失
  useEffect(() => {
    // 当页面展示时，溢出隐藏，无滚动条
    document.body.style.overflow = 'hidden'
    // 当页面关闭时，继续滚动
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // 点击关闭图片浏览器
  // 也是交由父级监听
  function closeBtnClickHandle() {
    if(closeClick) closeClick()
  }

  // 图片切换逻辑
  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if(newIndex < 0) newIndex = pictureUrls.length - 1
    if(newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function handleBottomItemClick(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  
  return (
    <BrowserWrapper showList={showList} isNext={isNext}>
      <div className='top'>
        <div className='close-btn' onClick={closeBtnClickHandle}>
          <IconClose/>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77"/>
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
        <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
              nodeRef={imgRef}
            >
              <img ref={imgRef} src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex+1}/{pictureUrls.length}:</span>
              <span>room apartment图片{currentIndex+1}</span>
            </div>
            <div 
            className="toogle"
            onClick={e => setShowList(!showList)}
            >
              <span>{showList ? "隐藏": "显示"}照片的列表</span>
             {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop/>}
            </div>
          </div>
          <div className="list">
            {<Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item,index) => {
                  return (
                    <div 
                    className={classNames("item", {active: currentIndex === index})} key={item} 
                    onClick={e => handleBottomItemClick(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>}
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls:PropTypes.array
}

export default PictureBrowser


