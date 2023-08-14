import React from "react";
import ApiParamField from "./ApiParamField";

import styles from "./styles.module.css";
import { ApiReferenceProps } from ".";
type PropType = NonNullable<Pick<ApiReferenceProps, "queryParams">>;

const ApiReferenceQueryParams = ({ queryParams }: PropType) => {
  return (
    <div className={styles.section}>
      <p>
        <strong>Query Parameters:</strong>
      </p>
      <ApiParamField param={{ type: "object", fields: queryParams }} prefix="query" />
    </div>
  );
};

export default ApiReferenceQueryParams;
