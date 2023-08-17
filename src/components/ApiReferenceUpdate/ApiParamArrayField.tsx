import React from "react";

import { FieldComponentProps, apiParamInitialValue } from "./ApiParamField";
import ApiParamField from "./ApiParamField";

import styles from "./styles.module.css";
import { ExpandButton, Param, ParamsList } from "../Params";
import Markdown from "markdown-to-jsx";

const ApiParamArrayField = ({ param, field, form, prefix }: FieldComponentProps<"array">) => {
  return (
    <Param name={param.name} type={param.type}>
      {param.description && <Markdown>{param.description}</Markdown>}
      {field?.value?.length > 0 && (
        <ParamsList>
          {[...field.value].map((value, index) => (
            <div key={index}>
              <div className={styles.negativeButtonContainerStyle}>
                <button
                  className={styles.negativeButtonStyle}
                  type="button"
                  onClick={() =>
                    form.setFieldValue(field.name, [
                      ...field.value.slice(0, index),
                      ...field.value.slice(index + 1),
                    ])
                  }
                >
                  - {`${param.name}[index]`}
                </button>
              </div>
              <ApiParamField param={param.field} prefix={`${field.name}[${index}]`} />
            </div>
          ))}
        </ParamsList>
      )}

      {field?.value?.length === 0 && (
        <ExpandButton
          onClick={() => {
            form.setFieldValue(field.name, [...field.value, apiParamInitialValue(param.field)]);
          }}
        >
          + Show Properties
        </ExpandButton>
      )}
    </Param>
  );
};

export default ApiParamArrayField;
