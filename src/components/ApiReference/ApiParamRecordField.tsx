import React, { useEffect, useMemo } from "react";

import { FieldComponentProps, apiParamInitialValue } from "./ApiParamField";
import ApiParamField from "./ApiParamField";

import { Param } from "../Params";
import Markdown from "markdown-to-jsx";

const ApiParamRecordField = ({ param, field, form }: FieldComponentProps<"array">) => {
  useEffect(() => {
    if (field?.value && Object.entries(field?.value ?? {})?.length === 0) {
      if (field.value[""]) return;

      form.setFieldValue(field.name, {
        ...field.value,
        "": apiParamInitialValue(param.field),
      });
    }
  }, []);

  const key = useMemo(() => {
    if (field && field.value) {
      return JSON.stringify(field.value);
    }
    return Math.random().toString();
  }, []);

  return (
    <Param name={param.name} type={param.type}>
      {param.description && <Markdown>{param.description}</Markdown>}
      {Object.entries(field?.value ?? {}).length > 0 && (
        <ApiParamField
          param={{ ...param.field }}
          prefix={`${field.name}[${key}]`}
          skipShowProperties
        />
      )}
    </Param>
  );
};

export default ApiParamRecordField;
