import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders learn react link", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const linkElement = screen.getByText(/Crypto & Metals/i);
  expect(linkElement).toBeInTheDocument();
});
