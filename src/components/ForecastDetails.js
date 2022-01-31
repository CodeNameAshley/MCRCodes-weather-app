import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";

export default function ForecastDetails(forecast) {
  const { date, description, icon, temperature, wind } = forecast;

  return (
    <div className="forecast-detail" key={date}>
      <div className="forecast-detail__date">
        <h1>{moment(date).format("ddd Do MMM")} </h1>
      </div>
      <div className="forecast-detail__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-detail__temperature">
        Max: {temperature.max}C <br /> Min: {temperature.min}C
      </div>
      <div className="forecast-detail__description">{description}</div>
      <div className="forecast-detail__wind">
        Wind <br />
        Speed:{wind.speed} <br /> Direction:{wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = PropTypes.shape(
  PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }).isRequired,
    })
  ).isRequired
).isRequired;
