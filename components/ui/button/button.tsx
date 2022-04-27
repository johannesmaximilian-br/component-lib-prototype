import React from "react";
import classNames from "classnames/bind";
import styles from "./styles/button.module.css";

export enum ButtonClasses {
  TEXT = "text",
  NAVIGATION = "navigation",
  CTA = "cta",
}

type ButtonProps = {
  className?: ButtonClasses | ButtonClasses[];
  text?: string;
  onClick?: React.MouseEventHandler;
};

export const Button: React.FC<ButtonProps> = ({
  className,
  text = "click this!",
  onClick
}: ButtonProps) => {
  const cx = classNames.bind(styles);
  const classes = cx('default', className);

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
};
