import styled from "styled-components";

export const TabsWrapper = styled.div`
  /* overflow-x: auto;//在X轴上超出滚动 */
  .tab{
    box-sizing: border-box;
    flex-basis:120px;//设置最小宽度
    flex-shrink:0;//即使很宽的时候也不要做压缩
    padding: 14px 16px;
    border-radius:3px;
    cursor: pointer;
    text-align:center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;//不换行
    margin-right: 16px;
    ${props => props.theme.mixin.boxShadow}

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`