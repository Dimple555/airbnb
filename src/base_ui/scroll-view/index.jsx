import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  // 根据情况判断是否显示箭头
  // 定义内部状态
  const [showRight,setShowRight] = useState(false)
  const [showLeft,setShowLeft] = useState(false)
  const [postIndex,setPostIndex] = useState(0)
  // const [totalWidth,setTotalWidth] = useState(0)//这样做会增加渲染次数，影响性能
  const totalWidthRef = useRef()

  // 组件渲染完毕，判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth//一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth//本身占据的宽度
    const totalWidth = scrollWidth - clientWidth
    totalWidthRef.current = totalWidth
    setShowRight(totalWidth > 0)
  }, [props.children])//children发生变化时执行
  
  /* // 事件处理的函数
  function rightClickHandle() {
    // 拿到最新的index
    const newIndex = postIndex + 1
    setPostIndex(newIndex)
    const newE1 = scrollContentRef.current.children[newIndex]
    const newE1Width = newE1.offsetLeft
    // console.log(newE1.offsetLeft);
    scrollContentRef.current.style.transform = `translate(-${newE1Width}px)`
    // 是否继续显示右边的按钮
    setShowRight(totalWidthRef.current > newE1Width)
    setShowLeft(newIndex > 0)
  }

  function leftClickHandle() {
    const newIndex = postIndex - 1
    setPostIndex(newIndex)
    const newE1 = scrollContentRef.current.children[newIndex]
    const newE1Width = newE1.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newE1Width}px)`
    // 是否继续显示左边的按钮
    setShowLeft(totalWidthRef.current > newE1Width)
    setShowLeft(newIndex > 0)
  } */
  
  function controlClickHandle(isRight) {
    const newIndex = isRight? postIndex + 1 : postIndex - 1
    setPostIndex(newIndex)
    const newE1 = scrollContentRef.current.children[newIndex]
    const newE1Width = newE1.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newE1Width}px)`
    // 是否继续显示左边的按钮
    setShowRight(totalWidthRef.current > newE1Width)
    setShowLeft(newIndex > 0)
  }
  return (
    <ScrollWrapper>
      {showLeft && 
      <div className='control left' onClick={e => controlClickHandle(false)}>
        <IconArrowLeft />
      </div>}
      {showRight && 
      <div className='control right' onClick={e => controlClickHandle(true)}>
        <IconArrowRight />
      </div>}
      {/* 插槽:别人来决定这里到底插入什么东西 */}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})


export default ScrollView