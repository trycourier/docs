import React, { FC } from "react";
import styles from "./params.module.css";

export const Params: FC = ({ children }) => {
  return <div className={styles.params}>{children}</div>;
};
