import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "mobx-react";

//import "normalize.css/normalize.css";
import "./styles/styles.scss";
//import "react-dates/lib/css/_datepicker.css";
import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";

import Invoice from "./models/Invoice";

const invoice = Invoice.create({ currency: "CAD" });

onPatch(invoice, patch => {
  console.log(patch);
});
makeInspectable(invoice);

const app = (
  <Provider invoice={invoice}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
