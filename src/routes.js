import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Error from "./pages/Error";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
