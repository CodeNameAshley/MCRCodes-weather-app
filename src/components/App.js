/* eslint-disable react/function-component-definition */
import "../styles/App.css";
import React from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastSummary from "./ForecastSummary";

const App = ({ forecasts, location }) => {
  const { city, country } = location;
  return (
    <div className="App">
      <header>Bikini Bottom News</header>
      <main>
        <LocationDetails city={city} country={country} />
        <ForecastSummaries forecasts={forecasts} />
        <ForecastSummary
          date={forecasts.date}
          temperature={forecasts.temperature}
        />
      </main>
      {/* 
      <ForecastDetails /> */}
    </div>
  );
};

App.propTypes = {
  forecasts: propTypes.arrayOf(
    propTypes.shape({
      date: propTypes.number,
      description: propTypes.string,
      icon: propTypes.string,
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
