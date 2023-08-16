import React from "react";

import { FieldComponentProps, apiParamInitialValue } from "./ApiParamField";
import ApiParamField from "./ApiParamField";

import styles from "./styles.module.css";
import { ExpandButton, Param, Params, ParamsList } from "../Params";

const ApiParamArrayField = ({ param, field, form }: FieldComponentProps<"array">) => {
  return (
    <Params>
      <Param name={param.name} type={param.type}>
        {field.value.length > 0 && (
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
                    - {param.name}[{index}]
                  </button>
                </div>
                <ApiParamField param={param.field} prefix={`${field.name}[${index}]`} />
              </div>
            ))}
          </ParamsList>
        )}

        <ExpandButton
          onClick={() => {
            form.setFieldValue(field.name, [...field.value, apiParamInitialValue(param.field)]);
          }}
        >
          + ADD
        </ExpandButton>
      </Param>
    </Params>
  );
};

export default ApiParamArrayField;
