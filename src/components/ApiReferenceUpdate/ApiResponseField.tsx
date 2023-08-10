import React, { useState } from "react";

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
  const [expandedIndex, setExpandedIndex] = useState(0);

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
      <Param name={field.name} type={field.type}>
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
      <div className={styles.field}>
        <div className={styles.groupContainer}>
          {field.name && (
            <div className={styles.groupHeader}>
              <ApiParamInfo param={field} />
            </div>
          )}

          <div className={styles.group}>
            {field.options.map((fieldParam, index) => (
              <React.Fragment key={index}>
                {expandedIndex === index ? (
                  <div className={styles.groupHeader}>
                    {fieldParam.displayName || fieldParam.name || `Option ${index + 1}`}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(index)}
                    className={styles.groupHeader}
                  >
                    {fieldParam.displayName || fieldParam.name || `Option ${index + 1}`}
                  </button>
                )}

                {expandedIndex === index && (
                  <ApiResponseField key={index} field={fieldParam} collapsible />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ApiResponseField;
