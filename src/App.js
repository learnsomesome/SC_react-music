import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router";

import SCAppHeader from "@c/app-header";
import SCAppFooter from "@c/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <SCAppHeader />
      {renderRoutes(routes)}
      <SCAppFooter />
    </HashRouter>
  );
});
