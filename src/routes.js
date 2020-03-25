import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LIOP from "./Page/LIOP";
import Diario from "./Page/Diario_iConex";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/liop" exact component={LIOP} />
      <Route path="/diario" exact component={Diario} />
    </BrowserRouter>
  );
}
