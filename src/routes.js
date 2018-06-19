import React from "react";
import { Route, Switch } from "react-router-dom";
import { HOME_ROUTE } from "./constants";
import { Home } from "./containers";

export default () => (
    <Switch>
        <Route exact path={HOME_ROUTE} component={Home} />
    </Switch>
);
