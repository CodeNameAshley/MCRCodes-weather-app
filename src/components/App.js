/* eslint-disable react/function-component-definition */
import "../styles/App.css";
import React, { useEffect, useState } from "react";
// import propTypes from "prop-types";
// import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";

export default function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleCitySearch = () => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  };

  return (
    <div className="weather-app">
      <header>The Weather in {location.city}</header>
      <main>
        <LocationDetails city={location.city} country={location.country} />
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </main>
    </div>
  );
}

// App.propTypes = {
//   forecasts: propTypes.arrayOf(
//     propTypes.shape({
//       date: propTypes.number,
//       description: propTypes.string,
//       humidity: propTypes.number,
//       icon: propTypes.string,
//       temperature: propTypes.shape({
//         max: propTypes.number,
//         min: propTypes.number,
//       }),
//       wind: propTypes.shape({
//         speed: propTypes.number,
//         direction: propTypes.string,
//       }).isRequired,
//     })
//   ).isRequired,
//   location: propTypes.shape({
//     city: propTypes.string,
//     country: propTypes.string,
//   }).isRequired,
// };
