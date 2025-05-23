import styled from "styled-components";

export const TabsWrapper = styled.div`
display: flex;
color: ${props => props.theme.isAlpha? "#fff" : "#222"};
.item{
  position: relative;
  width: 64px;
  height: 20px;
  margin: 10px 16px;
  font-size: 16px;
  cursor: pointer;

  &.active .bottom{
    position: absolute;
    width: 64px;
    height: 2px;
    background-color:${props => props.theme.isAlpha? "#fff" : "#333"};
    left: 0;
    bottom: -8px;
  }
}
`