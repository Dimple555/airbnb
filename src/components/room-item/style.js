import styled from "styled-components";

export const RoomWrapper = styled.div`
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  flex-shrink: 0;
  padding: 8px;
  .inner{
    width:100% ;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding-top:66.66%;//即该元素的高度为该元素的宽度的2/3
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;//希望图片不被压缩且覆盖父盒子
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }
  
  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }

  .slider{
    position: relative;
    cursor: pointer;
    &:hover{
      .control {
        display: flex;
      }
    }
    /* 相当于铺开在了父盒子上 */
    .control{
      position: absolute;
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;
      .btn{
        /* 为两侧渐变做准备 */
        width: 83px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        &.right {
          /* 从左向右渐变：起始点：半透明黑色；重点：完全透明 */
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }

    .indicator{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;
      width: 30%;
      z-index: 9;
      margin: 0 auto;//居中
      .dot-item{
        display: flex;
        align-items:center ;
        justify-content: center;
        width: 14.28%;//显示7个
        .dot{
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fff;

          &.active{
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
        }
      }

    }
  }
`