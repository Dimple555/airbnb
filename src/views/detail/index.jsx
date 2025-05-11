import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-picture'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed:false,topAlpha:false}))
  },[dispatch])
  const {detailInfo} = useSelector(state => ({
    detailInfo:state.detail.detailInfo
  })) 
  return (
    <DetailWrapper>
      <DetailPicture infoData={detailInfo}></DetailPicture>
    </DetailWrapper>
  )
})

export default Detail