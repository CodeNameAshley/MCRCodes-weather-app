import React from "react";
import { render } from "@testing-library/react";

describe("ForecastSummary", () => {
  const validProps = {
    date: 123456,
    description: "Stub description",
    icon: "stubIcon",
    temparature: {
      min: 12,
      max: 22,
    },
  };

  it("renders a summary of the forecast", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temparature={validProps.temparature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
