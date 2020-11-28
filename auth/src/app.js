import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/signin";
import SignUp from "./components/signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onAuthChange }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin">
              <SignIn onAuthChange={onAuthChange}></SignIn>
            </Route>
            <Route exact path="/auth/signup">
              <SignUp onAuthChange={onAuthChange}></SignUp>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
