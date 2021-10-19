import React, { useState, useCallback, useEffect } from "react";
import clsx from "clsx";
import { useFormikContext } from "formik";

import {
  FieldComponentProps,
  apiParamInitialValue,
  buildParamPath,
} from "../ApiReference/ApiParamField";
import ApiParamField from "../ApiReference/ApiParamField";

import styles from "./styles.module.css";

const ApiParamOneOfField = ({ param, field }: FieldComponentProps<"oneOf">) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setFieldValue } = useFormikContext();
  const selectOption = useCallback(
    (index: number) => {
      setActiveIndex(index);

      const oldValues = apiParamInitialValue(param.options[activeIndex]);
      const newValues = apiParamInitialValue(param.options[index]);

      Object.keys(oldValues).forEach((key) => {
        setFieldValue(buildParamPath(key, field.name), undefined);
      });

      Object.entries(newValues).forEach(([key, value]) => {
        setFieldValue(buildParamPath(key, field.name), value);
      });
    },
    [field.name, activeIndex, setFieldValue, param.options]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => selectOption(0), []);

  return (
    <div className={styles.fieldContainer}>
      {param.options?.map((fieldParam, index) => (
        <div key={index}>
          <div
            onClick={() => selectOption(index)}
            className={clsx(styles.fieldsHeader, {
              [styles.fieldsHeaderCollapsible]: activeIndex !== index,
              [styles.fieldsHeaderCollapsed]: activeIndex !== index,
            })}
          >
            {fieldParam.displayName || fieldParam.name}
          </div>

          {activeIndex === index && (
            <div className={styles.field}>
              <ApiParamField param={fieldParam} prefix={field.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ApiParamOneOfField;
