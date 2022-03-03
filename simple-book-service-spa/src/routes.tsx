import React from "react";
import { Switch, Route } from "react-router-dom";

import Books from "./pages/Books"
import Register from "./pages/Register";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Books} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Register/:id" exact component={Register} />
        </Switch>
    );
}

export default Routes