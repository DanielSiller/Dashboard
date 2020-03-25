import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LIOP from "./Pages/LIOP";
import Diario from "./Pages/Diario_iConex";
import Home from "./Pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/liop" exact component={LIOP} />
      <Route path="/diario" exact component={Diario} />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}
