import React, { FC, useState } from "react";
import styles from "./child-params.module.css";

export const ChildParams: FC = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  const showButton = (
    <div className={styles.showChildParamsButton} onClick={toggleCollapsed}>
      + Show child parameters
    </div>
  );

  const childParameters = (
    <div className={styles.childParams}>
      <span className={styles.hideChildParamsButton} onClick={toggleCollapsed}>
        - Hide child parameters
      </span>
      {children}
    </div>
  );

  return isCollapsed ? showButton : childParameters;
};
