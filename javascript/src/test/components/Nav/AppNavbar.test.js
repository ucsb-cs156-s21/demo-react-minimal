import React from "react";
import { render } from "@testing-library/react";
import AppNavbar from "main/components/Nav/AppNavbar";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("AppNavbar tests", () => {
  test("should render the correct brand text", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <AppNavbar />
      </Router>
    );
    const brandElement = getByText(/Changeme To App Name/);
    expect(brandElement).toBeInTheDocument();
  });
});
