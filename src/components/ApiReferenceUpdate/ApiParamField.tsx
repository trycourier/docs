import React from "react";
import { Field, FieldProps } from "formik";

import ApiParamInfo from "./ApiParamInfo";
import ApiParamTextField from "./ApiParamTextField";
import ApiParamNumberField from "./ApiParamNumberField";
import ApiParamBooleanField from "./ApiParamBooleanField";
import ApiParamJSONField from "./ApiParamJSONField";
import ApiParamArrayField from "./ApiParamArrayField";
import ApiParamRecordField from "./ApiParamRecordField";
import ApiParamObjectField from "./ApiParamObjectField";
import ApiParamOneOfField from "./ApiParamOneOfField";

interface ApiBaseParam<Type extends string, Value = never> {
  name?: string;
  displayName?: string;
  description?: string;
  required?: boolean;
  type: Type;
  example?: Value;
}

export type ApiParam =
  | (ApiBaseParam<"string", string> & { enum?: string[] })
  | ApiBaseParam<"number", number>
  | ApiBaseParam<"boolean", boolean>
  | ApiBaseParam<"json", string | object>
  | (ApiBaseParam<"array"> & { field: ApiParam })
  | (ApiBaseParam<"record"> & { field: ApiParam })
  | (ApiBaseParam<"object"> & { fields: ApiParam[] })
  | (ApiBaseParam<"oneOf"> & { options: ApiParam[] });

export interface FieldComponentProps<
  Type extends ApiParam["type"] = ApiParam["type"],
  Param extends ApiParam = Extract<ApiParam, { type: Type }>,
  Value extends ApiParam["example"] = Param["example"]
> extends FieldProps<Type extends "array" ? unknown[] : Value> {
  param: Param;
  isRoot?: boolean;
  skipShowProperties?: boolean;
}

const apiParamComponents: Record<
  ApiParam["type"],
  React.ComponentType<FieldComponentProps<ApiParam["type"]>>
> = {
  string: ApiParamTextField,
  number: ApiParamNumberField,
  boolean: ApiParamBooleanField,
  json: ApiParamJSONField,
  array: ApiParamArrayField,
  record: ApiParamRecordField,
  object: ApiParamObjectField,
  oneOf: ApiParamOneOfField,
};

export const PRIMITIVE_TYPES: ApiParam["type"][] = ["string", "number", "boolean", "json"];

export const buildParamPath = (param: ApiParam | string, prefix?: string) =>
  [prefix, typeof param === "string" ? param : param.name].filter((x) => x != null).join(".") ||
  null;

export interface ApiParamFieldProps {
  prefix: string;
  param: ApiParam;
  isRoot?: boolean;
  skipShowProperties?: boolean;
}

export const apiParamInitialValue = (param: ApiParam) => {
  if (param.type === "oneOf") {
    if (Array.isArray(param.options) && param.options.length > 0) {
      return { [param.name]: apiParamInitialValue(param?.options?.[0]) };
    }
    return {};
  }

  const path = param.name ? buildParamPath(param) : null;
  let value;
  switch (param.type) {
    case "object":
      value = param.fields.reduce((obj, field) => ({ ...obj, ...apiParamInitialValue(field) }), {});
      break;
    case "array":
      if (param.type === "array" && "fields" in param.field && Array.isArray(param.field.fields)) {
        value = [
          param.field.fields.reduce(
            (obj, field) => ({ ...obj, ...apiParamInitialValue(field) }),
            {}
          ),
        ];
        break;
      }
      value = [];
      break;
    case "record":
      value = {};
      break;
    default:
      value = PRIMITIVE_TYPES.includes(param.type) ? param.example : undefined;
      break;
  }

  if (path) {
    return { [path]: value };
  }

  return value;
};

const validateField = (param: ApiParam) => (value: string) => {
  if (!PRIMITIVE_TYPES.includes(param.type)) return;

  if (param.type === "json" && value != null) {
    try {
      if (typeof value === "string") JSON.parse(value);
    } catch {
      return "Invalid JSON";
    }
  }
};

const ApiParamField = ({ prefix, param, isRoot, skipShowProperties }: ApiParamFieldProps) => {
  const Component = apiParamComponents[param.type];

  const field = (
    <Field name={buildParamPath(param, prefix)} validate={validateField(param)}>
      {(props: FieldProps) => (
        <Component
          {...props}
          param={param}
          isRoot={isRoot}
          skipShowProperties={skipShowProperties}
        />
      )}
    </Field>
  );

  if (PRIMITIVE_TYPES.includes(param.type)) return <ApiParamInfo param={param} />;

  return field;
};

export default ApiParamField;
