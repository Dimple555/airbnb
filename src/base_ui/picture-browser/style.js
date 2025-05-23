import styled from "styled-components";

export const  BrowserWrapper =styled.div`
position: fixed;
z-index: 999;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #333;
display: flex;
flex-direction: column;

.top {
  position: relative;
  height: 86px;

  .close-btn {
    position: absolute;
    top: 15px;
    right: 25px;
    cursor: pointer;
  }
}

.slider{
  display: flex;
  justify-content: center;
  flex: 1;
  position: relative;
  .control{
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 83px;
      height: 100%;
      cursor: pointer;
    }
  }

  .picture{
    position: relative;
    height: 100%;
    overflow: hidden;
    width: 100%;
    max-width: 105vh;//最大宽度为105vh

    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 100%;
      user-select: none;
    }

    /* 动画的样式 */
    .pic-enter {
        transform: translateX(${props => props.isNext ? '100%' : '-100%'});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
  }
}

.preview{
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 10px;

  .info{
    position: absolute;//这样写就是相对于自己顶部永远有10px距离
    bottom: 10px;//使用浏览器的不同比例
    max-width: 105vh;
    color: #fff;
    .desc{
      display: flex;
      justify-content: space-between;
      .toogle{
        cursor: pointer;
      }
    }

    .list{
      margin-top: 3px;
      overflow: hidden;//溢出隐藏
      transition: all 200ms ease;
      height: ${props => props.showList ? '67px' : '0'};//将变量传递给BrowserWrapper

      .item{
        margin-right: 15px;
        cursor: pointer;

        img {
          height: 67px;
          opacity: 0.5;
        }
        &.active {
          img {
            opacity: 1;
          }
        }
      }
    }
  }
}
`