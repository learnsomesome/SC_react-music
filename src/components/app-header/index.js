import React, { memo } from "react";

import { HeaderWrapped, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";

import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default memo(function SCAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3 || index === 5) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="blank">
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapped>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/#" hidefocus="false" className="logo sprite_01">
            music
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/用户/电台"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapped>
  );
});
