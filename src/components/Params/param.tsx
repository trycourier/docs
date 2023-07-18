import React, { FC } from "react";
import styles from "./param.module.css";
import Markdown from "markdown-to-jsx";

export const Param: FC<{ name: string; type: string; required?: boolean }> = ({
  name,
  type,
  required,
  children,
}) => {
  return (
    <div className={styles.param}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.type}>
          <Markdown>{type}</Markdown>
        </span>
        {required && <span className={styles.required}>required</span>}
      </div>
      <div className={styles.description}>{children}</div>
    </div>
  );
};
