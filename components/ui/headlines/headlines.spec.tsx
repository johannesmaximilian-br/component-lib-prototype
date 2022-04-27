import React from "react";
import { render } from "@testing-library/react";
import { BasicHeadlines } from "./headlines.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicHeadlines />);
  const rendered = getByText("Default Headline H2");
  expect(rendered).toBeTruthy();
});
