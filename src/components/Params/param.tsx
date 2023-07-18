import React, { FC, ReactNode } from "react";
import styles from "./param.module.css";

export const Param: FC<{
  name: string;
  type: ReactNode;
  required?: boolean;
  collapsed?: boolean;
}> = ({ name, type, required, collapsed, children }) => {
  return (
    <div className={styles.param}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.type}>{type}</span>
        {required && <span className={styles.required}>required</span>}
      </div>
      {!collapsed && <div className={styles.description}>{children}</div>}
    </div>
  );
};
