import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

import Header from "./components/header";
import Loader from "./components/loader";
import { useState } from "react";

const Auth = lazy(() => import("./components/auth"));
const Marketing = lazy(() => import("./components/marketing"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header
          onSignOut={() => setIsAuthorized(false)}
          isAuthorized={isAuthorized}
        ></Header>
        <Suspense fallback={<Loader></Loader>}>
          <Switch>
            <Route path="/auth">
              <Auth onAuthChange={() => setIsAuthorized(true)}></Auth>
            </Route>
            <Route path="/" component={Marketing}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
