import React from "react";
import NextLink, { LinkProps } from "next/link";
import styles from "./styles/link.module.css";
import classNames from "classnames/bind";

export enum LinkClasses {
  TEXT = "text",
  NAVIGATION = "navigation",
  CTA = "cta",
  BUTTON = "button",
}

export interface LinkClassProps extends LinkProps {
  className?: LinkClasses | LinkClasses[];
  external?: boolean;
  children?: any;
}

export const Link: React.FC<LinkClassProps> = ({
  href,
  as,
  prefetch,
  locale,
  className = [LinkClasses.TEXT],
  external,
  children,
}: LinkClassProps) => {
  const cx = classNames.bind(styles);
  const classes = cx(className);

  return (
    <NextLink href={href} as={as} prefetch={prefetch} locale={locale} passHref>
      <a
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    </NextLink>
  );
};
