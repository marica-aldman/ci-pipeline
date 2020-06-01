import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar"
import App from "./App";

const Approute = () => {

    return (
        <div>

            <BrowserRouter>

                <Navbar />
                <Switch>
                    <Route path="/" component={App} exact ></Route>
                </Switch>
            </BrowserRouter>


        </div>
    )
}

export default Approute;