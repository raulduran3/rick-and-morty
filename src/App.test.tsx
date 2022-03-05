import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Rick & Morty App", () => {
  render(<App />);
  expect(screen.getByTestId("test-id")).toBe("Rick & Morty App");
});
