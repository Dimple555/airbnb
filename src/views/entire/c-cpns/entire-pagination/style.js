import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info{
    text-align: center;

    .MuiPaginationItem-page{
      margin: 0 8px;
      &.Mui-selected{
        background-color: #222;
        color: #fff;
      }

      &:hover{
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-icon{
      font-size: 25px;
    }

    .desc{
      margin-top:16px;
      color: #222;
    }
  }
`