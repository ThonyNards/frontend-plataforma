import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import { GlobalStyles } from "./globalStyles";

import App from "./components/App";

const container = document.getElementById("app");

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  container
);
