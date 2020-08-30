import styled from "styled-components";

export const HeaderWrapped = styled.div`
  height: 75px;
  font-size: 14px;
  background-color: #242424;

  .content {
    display: flex;
    height: 70px;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 177px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 19px;
        color: #ccc;
      }

      :last-of-type a {
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &.ant-input {
        font-size: 12px;
      }
      &::placeholder {
        color: #9b9b9b;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    margin-left: 12px;
    text-align: center;
    line-height: 32px;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      color: #fff;
      border: 1px solid #ccc;
    }
  }

  .login {
    margin: 0 22px 0 20px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
