import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//Own Components
import { RoutesWithLayout } from "./RoutesWithLayout";
import { Header, Homepage } from "./components";

export default () => (
  <BrowserRouter>
    <Switch>
      <RoutesWithLayout path="/" layout={Header} component={Homepage} />
    </Switch>
  </BrowserRouter>
);
