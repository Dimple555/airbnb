import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'
import PictureBrowser from '@/base_ui/picture-browser'

const DetailPicture = memo((props) => {
  // 定义组件内部的状态
  const [showBrowser,setShowBrowser] = useState(false)
  const {infoData} = props
  return (
    <PictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={infoData?.picture_urls?.[0]} alt="" />
            {/* 遮罩层 */}
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            infoData?.picture_urls?.slice(1,5).map(item => {
              return(
                <div className="item" key={item}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="show-btn" onClick={e => setShowBrowser(true)}>显示照片</div>
      {showBrowser && 
      <PictureBrowser 
      pictureUrls={infoData.picture_urls} 
      closeClick={e => setShowBrowser(false)}/>}
    </PictureWrapper>
  )
})

DetailPicture.propTypes = {
  infoData: PropTypes.object
}

export default DetailPicture