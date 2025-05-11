import styled from "styled-components";

export const IndicatorWrapper = styled.div`
overflow: hidden;
.i-content{
  position: relative;
  display: flex;
  transition: transform 200ms ease;
  /* 后代直接子元素 */
  > * {
    flex-shrink:0;//不压缩
  }
}
`