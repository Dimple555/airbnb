import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  // 定义搜索状态
  const [isSearch,setIsSearch] = useState(false)
  // 获取数据
  const { headerConfig } = useSelector(state => ({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  const { isFixed,topAlpha } = headerConfig
  
  // 监听滚动
  const {scrollY} = useScrollPosition()
  // 由于该变量和界面刷新无关，可用uesRef来记录
  // useRef在整个生命周期中可保持不变
  const prevY = useRef(0)
  // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
  if (!isSearch) prevY.current = scrollY
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30
  // 绝对值：Math.abs()
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  // 透明度逻辑
  const isAlpha  = topAlpha && scrollY === 0
  
  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={isFixed ? 'fixed' : ''}  isSearch={isSearch}>
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)}/>
            <HeaderRight/>
          </div>
          {/* 我们希望这里是有动画的，不要直接写逻辑与了 */}
        <div className="search-area" ></div>
        </div>
        { isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  ) 
})

export default AppHeader