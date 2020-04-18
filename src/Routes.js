import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//Own Components
import { RoutesWithLayout } from "./RoutesWithLayout";
import { Header, Homepage, About, Work, Contact } from "./components";

export default () => (
  <BrowserRouter>
    <Switch>
      <RoutesWithLayout path="/" exact layout={Header} component={Homepage} />
      <RoutesWithLayout path="/about" exact layout={Header} component={About} />
      <RoutesWithLayout path="/work" exact layout={Header} component={Work} />
      <RoutesWithLayout
        path="/contact"
        exact
        layout={Header}
        component={Contact}
      />
    </Switch>
  </BrowserRouter>
);
