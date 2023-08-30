import React, { useState, useCallback, useEffect } from "react";
import { useFormikContext } from "formik";
import { isPlainObject } from "lodash";

import {
  FieldComponentProps,
  apiParamInitialValue,
  buildParamPath,
} from "../ApiReference/ApiParamField";
import ApiParamField from "./ApiParamField";

import { ChildParams, Param } from "../Params";

const ApiParamOneOfField = ({ param, field }: FieldComponentProps<"oneOf">) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setFieldValue } = useFormikContext();
  const selectOption = useCallback(
    (index: number) => {
      setActiveIndex(index);

      const oldValues = apiParamInitialValue(param.options[activeIndex]);
      const newValues = apiParamInitialValue(param.options[index]);

      const setFieldValues = (values: any, clear = false) => {
        if (isPlainObject(values)) {
          if (Object.keys(values).length === 0) {
            setFieldValue(buildParamPath(field.name), undefined);
          } else {
            Object.entries(values).forEach(([key, value]) => {
              setFieldValue(buildParamPath(key, field.name), clear ? undefined : value);
            });
          }
        } else {
          setFieldValue(buildParamPath(field.name), clear ? undefined : values);
        }
      };

      setFieldValues(oldValues, true);
      setFieldValues(newValues);
    },
    [field.name, activeIndex, setFieldValue, param.options]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => selectOption(0), []);

  if (!param.name && !param.displayName)
    return (
      <ChildParams name="Properties">
        {param.options?.map((fieldParam, index) => (
          <ApiParamField
            key={index}
            param={{
              ...fieldParam,
              name: fieldParam.displayName || fieldParam.name || `Option ${index + 1}`,
            }}
            prefix={field.name}
          />
        ))}
      </ChildParams>
    );

  return (
    <Param name={param.name || param.displayName} type={param.type}>
      <ChildParams name="Properties">
        {param.options?.map((fieldParam, index) => (
          <ApiParamField
            key={index}
            param={{
              ...fieldParam,
              name: fieldParam.displayName || fieldParam.name || `Option ${index + 1}`,
            }}
            prefix={field.name}
          />
        ))}
      </ChildParams>
    </Param>
  );
};

export default ApiParamOneOfField;
