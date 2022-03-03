import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home" 
import Books from "./pages/Books"
import Form from "./pages/Books/Form"

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Books" exact component={Books} />
            <Route path="/Books/Form" exact component={Form} />
        </Switch>
    );
}

export default Routes