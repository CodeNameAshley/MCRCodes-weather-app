import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import "raf/polyfill";
// import { location, forecasts } from "./data/forecast.json";
import * as allInfo from "./data/forecast.json";

// import forecasts from "./data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App forecasts={allInfo.forecasts} location={allInfo.location} />
  </React.StrictMode>,
  document.getElementById("root")
);
