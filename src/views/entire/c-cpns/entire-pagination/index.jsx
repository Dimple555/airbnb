import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {fetchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  const theme = createTheme();
   // 从redux中获取数据
   const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  // 小算法:必须掌握
  const totalPage = Math.ceil(totalCount / 20)//向上取整！
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  // 事件处理的逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(event,pageCount){
    // 点击后回到顶部
    window.scrollTo(0,0)
    // 更新最新的页码，给网络请求的函数
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount-1))
  }

  return (
    <ThemeProvider theme={theme}> 
      <PaginationWrapper>
        {/* 当有数据时才展示分页器 */}
        {
          !!roomList.length && (
            <div className="info">
              <Pagination count={totalPage} onChange={pageChangeHandle}/>
              <div className="desc">
                第{startCount} - {endCount}个房源，共超过{totalCount}个
              </div>
            </div>
          )
        }
      </PaginationWrapper>
    </ThemeProvider>
  )
})

export default EntirePagination