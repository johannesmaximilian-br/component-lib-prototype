import React from "react";
import { Link , LinkClasses} from "./link";

export const BasicLink = () => {
  return <Link href="#">hello world!</Link>;
};

export const BasicButtonLink = () => {
  return <Link href="#" className={LinkClasses.BUTTON}>Button Link</Link>;
};

export const BasicCtaLink = () => {
  return <Link href="#" className={LinkClasses.CTA}>CTA Link</Link>;
};

export const BasicNavigationLink = () => {
  return <Link href="#" className={LinkClasses.NAVIGATION}>Navigation Link</Link>;
};