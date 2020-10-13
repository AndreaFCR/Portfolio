import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders hola mundo", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hola mundo/i);
  expect(linkElement).toBeInTheDocument();
});
