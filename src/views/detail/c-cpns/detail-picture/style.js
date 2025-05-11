import styled from "styled-components";

export const PictureWrapper = styled.div`
position: relative;
.pictures{
  display: flex;
  height: 600px;

  &:hover{
    /* 先给所有都添加遮罩层 */
    .cover{
      opacity: 1 !important;
    }
    /* 让悬停中的item的cover去遮罩层*/
    .item:hover{
      .cover{
        opacity: 0 !important;
      }
    }
  }
}

.left, .right {
    width: 50%;
    height: 100%;
    .item{
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in;//动画
      }
      .cover{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 200ms ease;//动画
      }

      &:hover {
        img {
          transform: scale(1.08);
        }
      }
    }  
  }

.right{
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 50%;
    height: 50%;
    border: 1px solid #000;
    box-sizing: border-box;
  }
}

.show-btn{
  position: absolute;
  z-index: 99;
  right: 15px;
  bottom: 15px;
  padding: 6px 15px;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
`