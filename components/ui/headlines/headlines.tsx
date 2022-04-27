import React from "react";
import styles from "./styles/headlines.module.css";

export enum HeadlineType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
}

export type HeadlinesProps = {
  text: string;
  headline?: HeadlineType;
};

export function Headlines({ text, headline }: HeadlinesProps) {
  const renderHeadline = (text, headline) => {
    switch (headline) {
      case HeadlineType.H1:
        return <h1 className={styles.headline}>{text}</h1>;
      case HeadlineType.H2:
        return <h2 className={styles.headline}>{text}</h2>;
      case HeadlineType.H3:
        return <h3 className={styles.headline}>{text}</h3>;
      case HeadlineType.H4:
        return <h4 className={styles.headline}>{text}</h4>;
      case HeadlineType.H5:
        return <h5 className={styles.headline}>{text}</h5>;
      default:
        return <h2 className={styles.headline}>{text}</h2>;
    }
  };

  return renderHeadline(text, headline);
}
