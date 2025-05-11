import Indicator from '@/base_ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ["aaa","bbb","ccc","ddd","eee","abc","cba"]
  const [selectIndex,setSelectIndex] = useState(0)
  function toogleClickHandle(isNext) {
    let newIndex = isNext? selectIndex + 1 : selectIndex - 1
    if(newIndex < 0) newIndex = names.length - 1
    if(newIndex > names.length - 1) newIndex = 0
    setSelectIndex(newIndex)
    // console.log(newIndex);
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e => toogleClickHandle(false)}>上一个</button>
        <button onClick={e => toogleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {
            names.map(item => {
              return <button key={item}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo