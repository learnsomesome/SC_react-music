import React, { useEffect, memo } from "react";

import { DiscoverWrapped, TopMenu } from "./style";
import { discoverMenu } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import request from "@/services/request";

export default memo(function SCDiscover({ route }) {
  useEffect(() => {
    request({
      url: "/banner",
    }).then((res) => {
      console.log(res);
    });
  }, []);

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
