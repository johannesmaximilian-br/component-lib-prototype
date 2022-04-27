import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./button";

it("should render with the correct text and fire Event", () => {
  const testFn = jest.fn();
  const { getByText } = render(<Button onClick={testFn} text="Hello World!" />);
  const rendered = getByText("Hello World!");
  fireEvent.click(rendered);
  expect(rendered).toBeTruthy();
  expect(testFn).toHaveBeenCalled();
});
