import React, { createRef, memo, useState } from 'react'
import { CSSTransition } from "react-transition-group"
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tab'
import SearchSections from './c-cpns/search-sections'
import SearchTitles from "@/assets/data/search_titles"

const  HeaderCenter= memo((props) => { 
  const barRef = createRef()
  const detailRef = createRef()
  const [tabIndex,setTabIndex] = useState(0)
  const titles = SearchTitles.map(item => item.title)
  const {isSearch,searchBarClick} = props

  // 处理事件，需要传递给父组件进行处理
  function searchBarClickHandle() {
    if(searchBarClick) searchBarClick()
  }
  return (
    <CenterWrapper>
        <CSSTransition
          in={!isSearch}
          classNames="bar"
          timeout={250}
          unmountOnExit={true}
          nodeRef={barRef}
        >
          <div className="search-bar" onClick={searchBarClickHandle} ref={barRef}>
            <div className="text">
              搜索房源和体验
            </div>
            <div className="icon">
            <IconSearchBar/>
            </div>
          </div>
        </CSSTransition>  

        <CSSTransition
          in={isSearch}
          classNames="detail"
          timeout={250}
          unmountOnExit={true}
          nodeRef={detailRef}
        >
          <div className="search-detail" ref={detailRef}>
            <SearchTabs titles={titles} tabClick={setTabIndex}/>
            <div className="infos">
              <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}/>
            </div>
          </div>
        </CSSTransition>
      
    </CenterWrapper>
  )
})

export default HeaderCenter