import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function DocPageLayoutMain({ children }) {
  return (
    <main className={clsx(styles.docMainContainer, styles.docMainContainerEnhanced)}>
      <div className={clsx(
        "container padding-top--md padding-bottom--lg",
        styles.docItemWrapper,
        styles.docItemWrapperEnhanced
      )}>
        {children}
      </div>
    </main>
  );
}