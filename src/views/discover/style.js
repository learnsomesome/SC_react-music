import styled from "styled-components";

export const DiscoverWrapped = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 182px;
  position: relative;
  top: -5px;
  .item a {
    display: inline-block;
    height: 20px;
    line-height: 21px;
    padding: 0 13px;
    margin: 7px 17px 0;
    color: #fff;
    text-decoration: none;
    &:hover,
    &.active {
      border-radius: 20px;
      background-color: #9b0909;
    }
  }
`;
