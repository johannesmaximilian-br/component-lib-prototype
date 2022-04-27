import React from "react";
import { Button, ButtonClasses } from "./button";

export const BasicButton = () => {
  const testFn = () => {
    console.log("clicked!");
  };
  return <Button text="Hello World!" onClick={testFn} />;
};

export const BasicButtonCta = () => {
  const testFn = () => {
    console.log("clicked!");
  };
  return (
    <Button text="DO THIS!" className={ButtonClasses.CTA} onClick={testFn} />
  );
};

export const BasicButtonNavigation = () => {
  const testFn = () => {
    console.log("clicked!");
  };
  return (
    <Button
      text="Item 1"
      className={ButtonClasses.NAVIGATION}
      onClick={testFn}
    />
  );
};
