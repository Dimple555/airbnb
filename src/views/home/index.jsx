import React, { memo, useEffect} from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils/index'
import HomeLongfor from '@/views/home/c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  // 再从redux中获取数据 
  const { goodPriceInfo,highScoreInfo,discountInfo, recommendInfo,longForInfo,plusInfo}= useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    recommendInfo:state.home.recommendInfo,
    longForInfo:state.home.longForInfo,
    plusInfo:state.home.plusInfo
  }),shallowEqual)

  // 派发异步事件：发生网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed:true, topAlpha:true}))
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}

        {isEmptyObject(longForInfo) && <HomeLongfor infoData={longForInfo}/>}

        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}

        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home