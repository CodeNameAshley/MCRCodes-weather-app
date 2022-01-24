import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
// import { location } from "../data/forecast.json";

function ForecastSummary(props) {
  const { date, description, icon, temparature } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecase-summary__temperature">
        {temparature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.date.isRequired,
  description: PropTypes.shape.isRequired,
  icon: PropTypes.element.isRequired,
  temparature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
