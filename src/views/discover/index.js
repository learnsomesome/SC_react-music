import React, { memo } from "react";

import { DiscoverWrapped, TopMenu } from "./style";
import { discoverMenu } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default memo(function SCDiscover({ route }) {
  return (
    <DiscoverWrapped>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.children)}
    </DiscoverWrapped>
  );
});
