import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

export default function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecasts.date}
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
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

// export default ForecastSummaries;
