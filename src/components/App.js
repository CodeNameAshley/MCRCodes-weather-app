/* eslint-disable react/function-component-definition */
import "../styles/App.css";
import React from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
// import ForecastSummary from "./ForecastSummary";

const App = ({ location, forecasts }) => {
  const { city, country } = location;
  return (
    <div className="App">
      <header>Weather App</header>
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
      {/* <ForecaseSummary date={date} temperature={temperature} />
      <ForecastDetails /> */}
    </div>
  );
};

App.propTypes = {
  forecasts: propTypes.arrayOf(
    propTypes.shape({
      date: propTypes.number,
      description: propTypes.string,
      icon: propTypes.number,
      temperature: propTypes.shape({
        max: propTypes.number,
        min: propTypes.number,
      }),
    })
  ).isRequired,
  location: propTypes.shape({
    city: propTypes.string,
    country: propTypes.string,
  }).isRequired,
};

export default App;
