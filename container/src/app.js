import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header";
import Marketing from "./components/marketing";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Marketing></Marketing>
      </div>
    </BrowserRouter>
  );
};
