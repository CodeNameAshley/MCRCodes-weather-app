import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the words weather app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
