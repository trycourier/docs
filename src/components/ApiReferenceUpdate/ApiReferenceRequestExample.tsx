import React from "react";
import { ApiReferenceProps } from ".";
import styles from "./styles.module.css";
import ApiExamples from "./ApiExamples";

type PropType = NonNullable<Pick<ApiReferenceProps, "method" | "path">>;

const ApiReferenceRequestExample = ({ path, method }: PropType) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>Request Example</div>
      <ApiExamples method={method} path={path} />
    </div>
  );
};

export default ApiReferenceRequestExample;
