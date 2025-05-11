import styled from "styled-components";

export const FooterWrapper = styled.div`
margin-top: 100px;
border-top: 1px solid #ddd;
.wrapper {
  width: 1032px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 48px 0;
  .service{
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    .item{
      flex: 1;
      .name {
        margin-bottom: 16px;
        font-weight: 700;
      }
      .list {
        .iten {
          margin-top: 6px;
          color: #767676;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .statement{
    padding-top: 20px;
    color: #767676;
    text-align: center;
  }
}
`