import React from "react";

import { ApiParam, PRIMITIVE_TYPES } from "./ApiParamField";
import ApiParamInfo from "./ApiParamInfo";

import styles from "./styles.module.css";
import { ChildParams, Param, Params } from "../Params";
import Markdown from "markdown-to-jsx";

export interface ApiResponse {
  status: number;
  description: string;
  body?: ApiParam;
}

export const buildResponse = (field: ApiParam) => {
  if (PRIMITIVE_TYPES.includes(field.type)) {
    return field.example;
  }

  if (field.type === "array") {
    if (field.field.type === "oneOf") {
      return [...field.field.options.map((option) => buildResponse(option))];
    }

    return [buildResponse(field.field)];
  }

  if (field.type === "record") {
    return { "{KEY}": buildResponse(field.field) };
  }

  if (field.type === "object") {
    return field.fields.reduce(
      (obj, objField) => ({
        ...obj,
        [objField.name]: buildResponse(objField),
      }),
      {}
    );
  }

  if (field.type === "oneOf") {
    return buildResponse(field.options[0]);
  }

  return "";
};

const ApiResponseField = ({
  field,
  collapsible,
  isRoot,
}: {
  field: ApiParam;
  collapsible?: boolean;
  isRoot?: boolean;
}) => {
  if (PRIMITIVE_TYPES.includes(field.type)) {
    const enums = field.type === "string" && field.enum ? `*[${field.enum.join(" | ")}]*` : "";

    return (
      <div className={styles.field}>
        <ApiParamInfo
          param={{
            ...field,
            description: [enums, field.description].filter(Boolean).join(" "),
          }}
        />
      </div>
    );
  }

  if (field.type === "object") {
    if (isRoot) {
      return (
        <>
          {field.fields?.map((arrayField, index) => (
            <ApiResponseField key={index} field={arrayField} collapsible />
          ))}
        </>
      );
    }
    return (
      <Param name={field.name || field.displayName} type={field.type}>
        {field.description && <Markdown>{field.description}</Markdown>}
        {collapsible && (
          <ChildParams name="Properties">
            {field.fields?.map((arrayField, index) => (
              <ApiResponseField key={index} field={arrayField} collapsible />
            ))}
          </ChildParams>
        )}
        {!collapsible && (
          <Params>
            {field.fields?.map((arrayField, index) => (
              <ApiResponseField key={index} field={arrayField} collapsible />
            ))}
          </Params>
        )}
      </Param>
    );
  }

  if (field.type === "array") {
    return (
      <Param name={field.name} type={field.type}>
        {field.description && <Markdown>{field.description}</Markdown>}
        {field.field.type === "object" && (
          <ChildParams name="Properties">
            {field.field.fields?.map((arrayField, index) => (
              <Params>
                <ApiResponseField key={index} field={arrayField} collapsible />
              </Params>
            ))}
          </ChildParams>
        )}
      </Param>
    );
  }

  if (field.type === "record") {
    return (
      <Param name={field.name} type={field.type}>
        {field.description && <Markdown>{field.description}</Markdown>}
        {field.field.type === "object" && (
          <ChildParams name="Properties">
            {field.field.fields?.map((arrayField, index) => (
              <Params>
                <ApiResponseField key={index} field={arrayField} collapsible />
              </Params>
            ))}
          </ChildParams>
        )}
      </Param>
    );
  }

  if (field.type === "oneOf") {
    return (
      <Param name={field.name} type={field.type}>
        {field.displayName && <Markdown>{field.description}</Markdown>}
        <ChildParams name="Properties">
          {field.options.map((fieldParam, index) => (
            <ApiResponseField
              key={index}
              field={{
                ...fieldParam,
                name: fieldParam.displayName || fieldParam.name || `Option ${index + 1}`,
              }}
              collapsible
            />
          ))}
        </ChildParams>
      </Param>
    );
  }

  return null;
};

export default ApiResponseField;
