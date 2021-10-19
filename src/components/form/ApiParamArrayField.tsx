import React from "react";
import clsx from "clsx";

import {
  FieldComponentProps,
  apiParamInitialValue,
} from "../ApiReference/ApiParamField";
import ApiParamInfo from "../ApiReference/ApiParamInfo";
import ApiParamField from "../ApiReference/ApiParamField";

import styles from "./styles.module.css";

const ApiParamArrayField = ({
  param,
  field,
  form,
}: FieldComponentProps<"array">) => {
  return (
    <div className={styles.fieldContainer}>
      {param.name && (
        <div className={styles.fieldsHeader}>
          <ApiParamInfo param={param} />
        </div>
      )}

      <div className={styles.field}>
        {field.value.map((value, index) => (
          <div key={index} className={styles.fieldContainer}>
            <div
              onClick={() =>
                form.setFieldValue(field.name, [
                  ...field.value.slice(0, index),
                  ...field.value.slice(index + 1),
                ])
              }
              className={clsx(
                styles.fieldsHeader,
                styles.fieldsHeaderCollapsible,
                styles.fieldsHeaderRemovable
              )}
            >
              {param.name}[{index}]
            </div>
            <div className={styles.field}>
              <ApiParamField
                param={param.field}
                prefix={`${field.name}[${index}]`}
              />
            </div>
          </div>
        ))}

        <div
          onClick={() => {
            form.setFieldValue(field.name, [
              ...field.value,
              apiParamInitialValue(param.field),
            ]);
          }}
          className={clsx(
            styles.fieldsHeader,
            styles.fieldsHeaderCollapsible,
            styles.fieldsHeaderCollapsed
          )}
        >
          ADD
        </div>
      </div>
    </div>
  );
};

export default ApiParamArrayField;
