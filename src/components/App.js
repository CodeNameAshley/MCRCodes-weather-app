/* eslint-disable react/function-component-definition */
import "../styles/App.css";
import React from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";
// import location from "../data/forecast.json";

const App = ({ location }) => {
  const { city, country } = location;
  return (
    <div className="App">
      <header>Weather App</header>
      <LocationDetails city={city} country={country} />
      <ForcastSummaries />
      <ForecaseSummary />
      <ForecastDetails />
    </div>
  );
};

App.propTypes = {
  location: propTypes.shape({
    city: propTypes.string,
    country: propTypes.string,
  }).isRequired,
};

export default App;
