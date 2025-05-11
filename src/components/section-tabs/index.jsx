import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base_ui/scroll-view'

const SectionTabs = memo((props) => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const {tabNames= [],tabClick} = props
  function itemClickHandle(index,name) {
    setCurrentIndex(index)
    tabClick(index,name)
  }
  return (
    <TabsWrapper>
      <ScrollView>
      {tabNames.map((item, index) => (
          <div 
          className={classNames("tab", {"active": index === currentIndex})}
          key={index} 
          onClick={e => itemClickHandle(index,item)}>
            {item}
          </div>
        ))}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs