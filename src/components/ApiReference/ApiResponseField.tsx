import React from "react";

import { ApiParam } from "./ApiParamField";
import ApiParamInfo from "./ApiParamInfo";

import styles from "./styles.module.css";

export interface ApiResponse {
  status: number;
  description: string;
  body: ApiParam;
}

export const responseToString = (field: ApiParam): string => {
  if (
    field.type === "string" ||
    field.type === "boolean" ||
    field.type === "json"
  ) {
    return String(field.example);
  }

  if (field.type === "array") {
    return JSON.stringify([responseToString(field.field)]);
  }

  if (field.type === "object") {
    return JSON.stringify(
      field.fields.reduce(
        (obj, objField) => ({
          ...obj,
          [objField.name]: responseToString(objField),
        }),
        {}
      ),
      null,
      2
    );
  }

  if (field.type === "oneOf") {
    return responseToString(field.options[0]);
  }

  return "";
};

const ApiResponseField = ({ field }: { field: ApiParam }) => {
  if (
    field.type === "string" ||
    field.type === "boolean" ||
    field.type === "json"
  ) {
    return (
      <div className={styles.field}>
        <ApiParamInfo param={field} />
      </div>
    );
  }

  if (field.type === "object") {
    return (
      <div className={styles.group}>
        <div className={styles.groupHeader}>
          <ApiParamInfo param={field} />
        </div>

        {field.fields.map((arrayField, index) => (
          <ApiResponseField key={index} field={arrayField} />
        ))}
      </div>
    );
  }

  if (field.type === "array") {
    return (
      <>
        <ApiParamInfo param={field} />

        <ApiResponseField field={field.field} />
      </>
    );
  }

  if (field.type === "oneOf") {
    return (
      <>
        <ApiParamInfo param={field} />

        {field.options.map((optionField, index) => (
          <ApiResponseField key={index} field={optionField} />
        ))}
      </>
    );
  }

  return null;
};

export default ApiResponseField;
