import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the words weather app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i); // or 'Weather App'
  expect(linkElement).toBeInTheDocument();
});
