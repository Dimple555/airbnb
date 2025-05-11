import styled from "styled-components";

export const RoomsWrapper = styled.div`
margin-top: 128px;
padding: 30px 16px;
position: relative;
.title{
  font-size: 22px;
  font-weight: 700;
  color: #222;
  padding-left:8px;
}
.list{
  display: flex;
  flex-wrap: wrap;
}

>.cover{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255,255,255,.8);
}
`