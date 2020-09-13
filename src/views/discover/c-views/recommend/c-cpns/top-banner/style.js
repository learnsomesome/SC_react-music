import styled from "styled-components";

export const BannerWrapped = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    background-color: #f2f2f2;
    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  /* 轮播图按钮 */
  .ant-carousel .slick-dots.slick-dots-bottom {
    bottom: 16px;
    li {
      button {
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background-color: #f2f2f2;
        &:hover {
          background-color: #c20c0c;
        }
      }
      &.slick-active {
        width: 16px;
        button {
          background-color: #c20c0c;
        }
      }
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "__blank",
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    margin-top: -31px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
