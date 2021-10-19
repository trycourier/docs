import React, { useState, useCallback } from "react";
import clsx from "clsx";
import TextareaAutosize from "react-textarea-autosize";

import { FieldComponentProps } from "../ApiReference/ApiParamField";
import ApiParamInputOverlay from "./ApiParamInputOverlay";
import styles from "./styles.module.css";

interface ApiParamBaseInputProps extends FieldComponentProps {
  multiline?: boolean;
  enum?: Array<string | boolean>;
}

const ApiParamBaseInput = ({
  multiline,
  enum: options,
  field,
  meta,
  form,
  param,
}: ApiParamBaseInputProps) => {
  const [focused, setFocused] = useState(false);
  const inputClassName = clsx(styles.input, {
    [styles.invalid]: meta.touched && meta.error,
  });

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback((event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    setFocused(false);
  }, []);

  const handleChange = useCallback(
    (event) => {
      const value = event.currentTarget.value;

      form.setFieldValue(
        event.currentTarget.name,
        options
          ? options.find((option) => String(option) === value)
          : value || undefined
      );
    },
    [form, options]
  );

  const fieldProps = {
    ...field,
    value: field.value == null ? "" : String(field.value),
    onChange: handleChange,
  };

  return (
    <div
      tabIndex={-1}
      className={styles.inputContainer}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {options ? (
        <select {...fieldProps} className={inputClassName}>
          <option />
          {options.map((option, index) => (
            <option key={index}>{String(option)}</option>
          ))}
        </select>
      ) : multiline ? (
        <TextareaAutosize {...fieldProps} className={inputClassName} />
      ) : (
        <input {...fieldProps} className={inputClassName} />
      )}
      {focused && (
        <ApiParamInputOverlay
          field={field}
          form={form}
          meta={meta}
          param={param}
        />
      )}
    </div>
  );
};

export default ApiParamBaseInput;
