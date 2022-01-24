import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {Object.keys(forecasts).map((forecast) => (
        <ForecastSummary
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temparature={forecast.temparature}
        />
      ))}
    </div>
  );
}

ForecastSummaries.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.shape.isRequired,
  icon: PropTypes.element.isRequired,
  temparature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummaries;
