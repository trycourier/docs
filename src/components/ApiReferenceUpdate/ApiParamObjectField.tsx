import React from "react";

import { FieldComponentProps } from "./ApiParamField";
import ApiParamInfo from "./ApiParamInfo";
import ApiParamField from "./ApiParamField";

import styles from "./styles.module.css";
import { Params } from "../Params";

const ApiParamObjectField = ({ param, field }: FieldComponentProps<"object">) => {
  return (
    <div className={styles.groupContainer}>
      {param.name && (
        <div className={styles.groupHeader}>
          <ApiParamInfo param={param} />
        </div>
      )}

      <Params>
        {param.fields?.map((fieldParam, index) => (
          <ApiParamField key={index} param={fieldParam} prefix={field.name} />
        ))}
      </Params>
    </div>
  );
};

export default ApiParamObjectField;
