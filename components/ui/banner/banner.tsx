import React from "react";
import { Button } from "@johannesmaximilian/components.ui.button";
import { Link, LinkClasses } from "@johannesmaximilian/components.ui.link";
import {
  Headlines,
  HeadlineType,
} from "@johannesmaximilian/components.ui.headlines";
import styles from "./styles/banner.module.css";

export type BannerProps = {
  imgSrc?: string;
  buttonText?: string;
  headlineText?: string;
  link?: string;
  onClick?: React.MouseEventHandler;
};

export function Banner({ imgSrc, buttonText, headlineText, link, onClick }: BannerProps) {
  return (
    <div className={styles.banner}>
      {imgSrc && <img src={imgSrc} alt={headlineText} />}
      {(headlineText || buttonText) && (
        <div className={`${styles.wrapper} ${!imgSrc ? styles.noImage : ''}`}>
          {headlineText && (
            <Headlines headline={HeadlineType.H1} text={headlineText} />
          )}
          {link && <Link className={LinkClasses.BUTTON} href={link}>{buttonText}</Link>}
          {(buttonText && !link) && <Button onClick={onClick}>{buttonText}</Button>}
        </div>
      )}
    </div>
  );
}
