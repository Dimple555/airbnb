import styled from "styled-components";

export const RightWrapper = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
color: ${props => props.theme.text.primaryColor};
font-weight: 600;
.btns {
  display: flex;
  color: ${props => props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};
  span{
    height: 18px;
    line-height: 18px;
    padding: 12px 15px;
    cursor: pointer;
    border-radius:22px;
    &:hover{
      background-color:${props => props.theme.isAlpha? "rgba(255,255,255,.1)" : "#f5f5f5"};
    }
  }
  margin-right: 10px;
}

.profile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 77px;
  height: 42px;
  margin-right: 24px;
  background-color: #fff;
  border-radius:21px;
  border: 1px solid #ccc;
  color: ${props => props.theme.text.primaryColor};
  cursor: pointer;

  /* transition: box-shadow 200ms ease;
  &:hover{
    box-shadow:0 2px 4px rgba(0,0,0,.18);
  } */
  /* styled-components实在是太灵活了 */
  ${props => props.theme.mixin.boxShadow}

  .panel{
    position: absolute;
    right: 0;
    top: 60px;
    /* box-sizing: border-box; */
    width: 240px;
    background-color: #fff;
    box-shadow: 0 0 6px rgba(0,0,0,.2);
    color: #666;
    .top, .bottom {
      padding: 10px 0;
      .item{
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
      }

    }
  .top{
    border-bottom: 1px solid #ddd;
  }
  }
}

`