import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionsWrapper } from './style'

const SearchSections = memo((props) => {
  const {searchInfos} = props
  return (
    <SectionsWrapper>
      {
        searchInfos.map((item,index) => {
          return (
            <div className="item" key={index}>
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
              {/* 除了最后一个，其它分别加一个右边的竖线 */}
              { index !== searchInfos.length -1 && <div className='divider'></div> }
            </div>
          )
        })
      }
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {
  searchInfos:PropTypes.array
}

export default SearchSections