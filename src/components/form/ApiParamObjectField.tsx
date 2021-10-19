import React from "react";
import clsx from "clsx";

import { FieldComponentProps } from "../ApiReference/ApiParamField";
import ApiParamInfo from "../ApiReference/ApiParamInfo";
import ApiParamField from "../ApiReference/ApiParamField";

import styles from "./styles.module.css";

const ApiParamObjectField = ({
  param,
  field,
}: FieldComponentProps<"object">) => {
  return (
    <div className={styles.fieldContainer}>
      {param.name && (
        <div className={styles.fieldsHeader}>
          <ApiParamInfo param={param} />
        </div>
      )}
      <div className={clsx({ [styles.field]: param.name })}>
        {param.fields?.map((fieldParam, index) => (
          <ApiParamField key={index} param={fieldParam} prefix={field.name} />
        ))}
      </div>
    </div>
  );
};

export default ApiParamObjectField;
