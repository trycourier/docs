import React from "react";

import { FieldComponentProps } from "../ApiReference/ApiParamField";

import ApiParamBaseInput from "./ApiParamBaseInput";

const ApiParamJSONField = (props: FieldComponentProps<"json">) => {
  return <ApiParamBaseInput {...props} multiline />;
};

export default ApiParamJSONField;
