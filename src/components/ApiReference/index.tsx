import React, { useState, useCallback } from "react";
import clsx from "clsx";
import { Formik, Form } from "formik";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";

import ApiResponseField, { responseToString } from "./ApiResponseField";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";
import ApiParamButton from "../form/ApiParamButton";

interface ApiPrimitiveField {
  type: "string";
  name?: string;
  description?: string;
  example?: string;
}

interface ApiComplexField extends Omit<ApiPrimitiveField, "type"> {
  type: "object" | "array";
  fields: ApiField[];
}

export type ApiField = ApiComplexField | ApiPrimitiveField;

interface ApiResponse {
  status: number;
  description: string;
  body: ApiField;
}

export interface ApiReferenceProps {
  auth: "BEARER";
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description?: string;
  pathParam?: ApiParam;
  queryParam?: ApiParam;
  bodyParam?: ApiParam;
  responses: ApiResponse[];
}

const ApiReference = ({
  auth,
  method,
  path,
  pathParam,
  queryParam,
  bodyParam,
  responses,
}: ApiReferenceProps) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0);

  const execCallback = useCallback(
    async (values) => {
      setError(false);
      setLoading(true);

      try {
        const response = await fetch("/api/exec", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            method,
            path,
            auth: auth ? "dk_prod_D1APZA34G64MJGPEHVV2WRFQZQKR" : null,
            body: values,
          }),
        });

        if (!response.ok) throw new Error();

        const body = await response.json();

        setResponse(body);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [auth, path, method]
  );

  return (
    <Formik
      initialValues={{
        path: pathParam && apiParamInitialValue(pathParam),
        query: queryParam && apiParamInitialValue(queryParam),
        body: bodyParam && apiParamInitialValue(bodyParam),
      }}
      onSubmit={execCallback}
    >
      {({ values }) => (
        <Form autoComplete="off">
          <div className="row">
            <div className="col">
              <small>
                <span className={clsx("badge badge--primary", styles.method)}>
                  {method}
                </span>
                {process.env.API_HOST}
                {path}
              </small>
            </div>
            <div className="col col--2">
              <ApiParamButton type="submit">Execute</ApiParamButton>
            </div>
          </div>

          <CodeBlock className="language-json">
            {JSON.stringify(values, null, 2)}
          </CodeBlock>

          {response && (
            <CodeBlock className="language-json">
              {JSON.stringify(response, null, 2)}
            </CodeBlock>
          )}

          {pathParam && (
            <div className={styles.params}>
              <ApiParamField param={pathParam} prefix="path" />
            </div>
          )}

          {queryParam && (
            <div className={styles.params}>
              <ApiParamField param={queryParam} prefix="query" />
            </div>
          )}

          {bodyParam && (
            <div className={styles.params}>
              <ApiParamField param={bodyParam} prefix="body" />
            </div>
          )}

          <ul className="tabs">
            {responses.map((response, index) => (
              <li
                key={index}
                className={clsx("tabs__item", {
                  "tabs__item--active": responseIndex === index,
                })}
                onClick={() => setResponseIndex(index)}
              >
                {response.status} - {response.description}
              </li>
            ))}
          </ul>

          <ApiResponseField field={responses[responseIndex].body} />

          {/* <CodeBlock
            code={responseToString(responses[responseIndex].body)}
            language="json"
          /> */}

          <CodeBlock className="language-json">
            {responseToString(responses[responseIndex].body)}
          </CodeBlock>
        </Form>
      )}
    </Formik>
  );
};

export default ApiReference;
