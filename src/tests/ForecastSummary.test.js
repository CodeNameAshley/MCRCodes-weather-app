import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../components/LocationDetails";

describe("ForecastSummaries", () => {
  it("renders a summary of the forecast", () => {
    const { getByText } = render(
      < />
    );

    expect(getByText()).toHaveClass(
      "forecast-summary"
    );
  });
});
