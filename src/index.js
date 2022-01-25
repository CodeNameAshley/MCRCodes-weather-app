import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import "raf/polyfill";
// import { location, forecasts } from "./data/forecast.json";
import packageInfo from "./data/forecast.json";

// import forecasts from "./data/forecast.json";

const { forecasts, location } = packageInfo;

ReactDOM.render(
  <React.StrictMode>
    <App forecasts={forecasts} location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);
