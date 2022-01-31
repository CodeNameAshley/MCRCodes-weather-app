import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";

export default function ForecastSummary(forecast) {
  const { date, description, icon, temperature } = forecast;

  return (
    <div className="forecast-summary" key={date}>
      <div className="forecast-summary__date">
        <h1>{moment(date).format("ddd Do MMM")} </h1>
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <h2>
          <WeatherIcon name="owm" iconId={icon} />
        </h2>
      </div>
      <div className="forecast-summary__temperature">
        Max: {temperature.max}C <br /> Min: {temperature.min}C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = PropTypes.shape(
  PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
    })
  ).isRequired
).isRequired;
