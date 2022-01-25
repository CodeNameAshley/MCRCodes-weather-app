import React from "react";
import PropTypes from "prop-types";

export default function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;

  return (
    <div className="forecast-summary" key={date}>
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecast-summary__temperature">{temperature}</div>
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

// export default ForecastSummary;
