import styled from "styled-components";

export const FooterWrapped = styled.div`
  height: 173px;
  font-size: 12px;
  background-color: #f2f2f2;

  .content {
    display: flex;
    justify-content: space-between;
    height: 115px;
  }
`;

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;

  .link {
    .link-item {
      color: #999;
    }
    .line {
      color: #c2c2c2;
      margin: 0 8px 1px 10px;
    }
  }

  .copy-right {
    color: #666;
    & > span:first-child {
      margin-right: 14px;
    }
    .police-link {
      margin-left: 8px;
      .police-logo {
        display: inline-block;
        width: 14px;
        height: 14px;
        background-image: url("https://s2.music.126.net/style/web2/img/3rd/police.png?2c938ae0caef0ed4e5146d5ae95df1bd");
        background-size: cover;
        margin-right: 2px;
        vertical-align: -2px;
      }
    }
  }
`;

export const FooterRight = styled.ul`
  margin-top: 33px;
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 180px 100px;
    }
    :nth-child(1) .title {
      background-position: 2px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 3px -54px;
      margin-top: 6px;
    }
    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`;
