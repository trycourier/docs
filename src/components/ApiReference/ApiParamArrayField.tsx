import React, { useEffect } from "react";
import { FieldComponentProps, apiParamInitialValue } from "./ApiParamField";
import ApiParamField from "./ApiParamField";

import { Param } from "../Params";
import Markdown from "markdown-to-jsx";

const ApiParamArrayField = ({ param, field, form }: FieldComponentProps<"array">) => {
  useEffect(() => {
    if (field) {
      form.setFieldValue(field.name, [
        Array.isArray(field?.value) ? [...field?.value] : apiParamInitialValue(param.field),
      ]);
    }
  }, []);

  return (
    <Param name={param.name} type={param.type}>
      {param.description && <Markdown>{param.description}</Markdown>}
      {field?.value?.length > 0 && (
        <ApiParamField param={param.field} prefix={`${field.name}[${0}]`} skipShowProperties />
      )}
    </Param>
  );
};

export default ApiParamArrayField;
