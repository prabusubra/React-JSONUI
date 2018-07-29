import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Slidebar from "./Components/Slidebar";
ReactDOM.render(
  <BrowserRouter>
    <Slidebar />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
