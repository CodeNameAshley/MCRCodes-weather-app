import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";

export default function ForecastSummary(forecast) {
  const { date, description, icon, temperature } = forecast;
  console.log(forecast);

  return (
    <div className="forecast-summary" key={date}>
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">{temperature.max}</div>
      <div className="forecast-summary__description">{description}</div>
      {/* <div className="forecast-summary__wind">{wind}</div> */}
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
      // wind: PropTypes.shape({
      //   speed: PropTypes.number,
      //   direction: PropTypes.string,
      // }).isRequired,
    })
  ).isRequired
).isRequired;
