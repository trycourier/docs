import React from "react";

import { FieldComponentProps } from "./ApiParamField";
import ApiParamField from "./ApiParamField";

import { ChildParams, Param, Params } from "../Params";

const ApiParamObjectField = ({ param, field, isRoot }: FieldComponentProps<"object">) => {
  if (isRoot) {
    return (
      <Params>
        {param.fields?.map((fieldParam, index) => (
          <ApiParamField key={index} param={fieldParam} prefix={field.name} />
        ))}
      </Params>
    );
  }
  return (
    <Param name={param.name} type={param.type}>
      <ChildParams name="Properties">
        {param.fields?.map((fieldParam, index) => (
          <ApiParamField key={index} param={fieldParam} prefix={field.name} />
        ))}
      </ChildParams>
    </Param>
  );
};

export default ApiParamObjectField;
