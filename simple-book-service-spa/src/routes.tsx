import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import Books from "./pages/Books"

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Books" exact component={Books} />
        </Switch>
    );
}

export default Routes