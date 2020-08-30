import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "./router";
import store from "./store";

import SCAppHeader from "@c/app-header";
import SCAppFooter from "@c/app-footer";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SCAppHeader />
        {renderRoutes(routes)}
        <SCAppFooter />
      </HashRouter>
    </Provider>
  );
});
