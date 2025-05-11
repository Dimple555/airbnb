import styled from "styled-components";

export const HeaderWrapper = styled.div`


&.fixed{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
}

.content{
  position: relative;
  z-index: 19;
  box-sizing: border-box;
  transition: all 200ms ease;
  background-color: ${props => props.theme.isAlpha? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
  border-bottom: ${props => props.theme.isAlpha ? "1px solid rgba(233,233,233,0)": "1px solid rgba(233,233,233,1)"};
  .top{
    display: flex;
    align-items: center;
    height: 80px;
  }
  .search-area{
    transition: height 200ms ease;
    height: ${props => props.isSearch ? "100px" : "0"};
  }
}

.cover{
  position: fixed;
  z-index: 8;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0,0,0,.8);
}

`