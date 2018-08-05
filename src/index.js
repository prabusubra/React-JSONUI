import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Slidebar from "./Components/Slidebar";

import Understandings from "./Components/Learning/Understandings";
/* ReactDOM.render(
  <BrowserRouter>
    <Slidebar />
  </BrowserRouter>,
  document.getElementById("root")
); */

ReactDOM.render(
  <BrowserRouter>
    <Slidebar />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
