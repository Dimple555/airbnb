import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {
            footerData.map(item => {
              return(
                <div className="item" key={item.name}>
                  <div className="name">{item.name}</div>
                  <div className="list">
                    {
                      item.list.map(iten => {
                        return(
                          <div className="iten" key={iten.text}>
                            <a href={iten.link}>{iten.text}</a>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="statement">
          <p>京ICP备16017121号京ICP证 160773号京公网安备 11010502032345号安彼迎网络（北京）有限公司营业执照</p>
        <p>全国旅游投诉渠道 12345违法和不良信息举报邮箱 jubao@airbnb.com</p>
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter