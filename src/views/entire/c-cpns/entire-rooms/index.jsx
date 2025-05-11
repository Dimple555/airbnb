import React, { memo, useCallback} from 'react'
import { shallowEqual,useDispatch,useSelector } from 'react-redux'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  // 从redux中获取数据
  const { roomList,totalCount,isLoading} = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading
  }),shallowEqual)

  // 事件处理：使用useCallback包裹-性能优化
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    console.log(item);
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  },[navigate,dispatch])
  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className="list">
      {
        roomList.map(item => {
          return(
            <RoomItem 
            key={item._id} 
            itemData={item} 
            itemWidth="20%"
            itemClick={itemClickHandle}
            />
          )
        })
      }
      </div>

      {/* 加载中显示遮罩层 */}
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms