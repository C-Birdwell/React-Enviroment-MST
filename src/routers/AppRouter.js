import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import HelpPage from "../pages/HelpPage";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
