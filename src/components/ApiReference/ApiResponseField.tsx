import React from "react";

import { ApiField } from ".";

export const responseToString = (field: ApiField): string => {
  if (field.type === "string") {
    return field.example;
  }

  if (field.type === "array") {
    return JSON.stringify(
      field.fields.map((arrayField) => responseToString(arrayField))
    );
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

  return "";
};

const ApiResponseField = ({ field }: { field: ApiField }) => {
  if (field.type === "string") {
    return (
      <div>
        {field.type} ||| {field.name} -- {field.description} - {field.example}
      </div>
    );
  }

  if (field.type === "array" || field.type === "object") {
    return (
      <div>
        <div>
          {field.type} ||| {field.name} -- {field.description} - {field.example}
        </div>

        {field.fields.map((arrayField, index) => (
          <ApiResponseField key={index} field={arrayField} />
        ))}
      </div>
    );
  }

  return null;
};

export default ApiResponseField;
