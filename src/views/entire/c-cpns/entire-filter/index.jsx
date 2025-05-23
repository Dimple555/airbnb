import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectItems,setSelectItems] = useState([])

  function itemClickHandle(item) {
    const newItems = [...selectItems]
    // 如果该数组中已保护，就将它移除掉
    if(newItems.includes(item)){
      newItems.splice(newItems.indexOf(item),1)
    }else{
      // 否则则加入
      newItems.push(item)
    }
    setSelectItems(newItems)
  }
  return (
    <FilterWrapper>
      <div className="filter">
      {
        filterData.map(item => {
          return (
            <div 
            className={classNames("item", {active: selectItems.includes(item)})}
            key={item}
            onClick={e => itemClickHandle(item)}
            >{item}</div>
          )
        })
      }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter