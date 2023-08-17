import React from "react";
import omit from "lodash/omit";

import { FieldComponentProps, apiParamInitialValue } from "./ApiParamField";
import ApiParamField from "./ApiParamField";

import styles from "./styles.module.css";
import { ExpandButton, Param, Params, ParamsList } from "../Params";
import Markdown from "markdown-to-jsx";

const ApiParamRecordField = ({ param, field, form }: FieldComponentProps<"array">) => {
  return (
    <Param name={param.name} type={param.type}>
      {param.description && <Markdown>{param.description}</Markdown>}
      {Object.entries(field.value).length > 0 && (
        <ParamsList>
          {Object.entries(field.value).map(([key], index) => (
            <div key={index} className={styles.paramContainer}>
              <div className={styles.negativeButtonContainerStyle}>
                <button
                  type="button"
                  onClick={() => form.setFieldValue(field.name, omit(field.value, key))}
                  className={styles.negativeButtonStyle}
                >
                  - {param.name}[KEY]
                </button>
              </div>
              <ApiParamField param={param.field} prefix={`${field.name}[${key}]`} />
            </div>
          ))}
        </ParamsList>
      )}
      <ExpandButton
        onClick={() => {
          if (field.value[""]) return;

          form.setFieldValue(field.name, {
            ...field.value,
            "": apiParamInitialValue(param.field),
          });
        }}
      >
        + ADD
      </ExpandButton>
    </Param>
  );
};

export default ApiParamRecordField;
