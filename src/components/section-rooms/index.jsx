import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomWrapper } from './style'

const SectionRooms = memo((props) => {
  const {roomsList = [],itemWidth} = props
  return (
    <RoomWrapper>
      <ul className='room-list'>
        {
          roomsList?.slice(0,8).map(item => {
            return <RoomItem itemData={item}  key={item.id} itemWidth={itemWidth} />
          })
        }
    </ul>
    </RoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomsList:PropTypes.array
}

export default SectionRooms