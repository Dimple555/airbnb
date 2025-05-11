import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'

const  SearchTabs= memo((props) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const {titles,tabClick} = props

  function itemClickHandle(index) {
    if(tabClick) tabClick(index)
    setCurrentIndex(index)
  }
  return (
    <TabsWrapper>
      {
        titles.map((item,index) => {
          return (
            <div 
            className={classNames("item",{active: currentIndex === index })}
            key={item}
            onClick={e => itemClickHandle(index)}
            >
              <span>{item}</span>
              <span className='bottom'></span>
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles:PropTypes
}

export default SearchTabs