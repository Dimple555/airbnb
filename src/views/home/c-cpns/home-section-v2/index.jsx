import PropTypes from 'prop-types'
import React, { memo,useState,useCallback} from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  // 从props中获取数据
  const { infoData } = props

  // 数据的转换
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name,setName] = useState(initialName)
  const tabNames = infoData?.dest_address?.map(item => item.name)
  
  // 事件处理函数
  // 存在问题：在未发生变化时不需要渲染-useCallBack()
  const tabClickHandle = useCallback(function (index,name) {
    setName(name)
  },[])

  return (
    <SectionV2Wrapper>
      <div className="discount">
        <SectionHeader  title={infoData?.title} subtitle={infoData?.subtitle}/>
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
        <SectionRooms  roomsList={infoData.dest_list?.[name]} itemWidth="33.333%"/>
        <SectionFooter name={name}/>
      </div>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV2