import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

import Header from "./components/header";
import Marketing from "./components/marketing";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Marketing></Marketing>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
