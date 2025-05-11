import React, { memo, useState,useEffect } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  /** 定义组件内部的状态 */
  const [ showPanel, setShowPanel ] = useState(false)

  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    // 增加监听
    window.addEventListener("click", windowHandleClick, true)
    // 取消监听
    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  }, [])//不依赖别人，只执行一次

  // 点击窗口的任何地方，它都会消失→监听window的点击
  function profileClickHandle() {
    setShowPanel(!showPanel)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal/>
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu/>
        <IconAvatar/>

        { showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item'>注册</div>
              <div className='item'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        ) }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight