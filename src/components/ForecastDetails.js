import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;

  return (
    <div className="forecast-details" key={date}>
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__humidity">{humidity}</div>
      <div className="forecast-details__temperature">
        Max: {temperature.max}&deg;C <br /> Min: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__wind">
        {wind.speed} {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};
