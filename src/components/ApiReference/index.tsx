import React, { useState, useCallback, useMemo } from "react";
import { Formik, Form, Field } from "formik";
import CodeBlock from "@theme/CodeBlock";

import styles from "./styles.module.css";

import ApiResponseField, { ApiResponse, responseToString } from "./ApiResponseField";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";
import ApiParamButton from "./ApiParamButton";
import ApiExamples from "./ApiExamples";

export interface ApiReferenceProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description?: string;
  pathParams?: ApiParam[];
  queryParams?: ApiParam[];
  bodyParam?: ApiParam;
  responses: ApiResponse[];
}

export interface FormValues {
  auth: string;
  path: object;
  query: object;
  body: object;
}

const STORAGE_AUTH_KEY = "API_REFERENCE_AUTH_KEY";

const ApiReference = ({
  method,
  path,
  pathParams,
  queryParams,
  bodyParam,
  responses,
}: ApiReferenceProps) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0);

  const handleResponseSelect = useCallback((event) => {
    setResponseIndex(+event.currentTarget.value);
  }, []);

  const execCallback = useCallback(
    async (values) => {
      setLoading(true);

      localStorage.setItem(STORAGE_AUTH_KEY, values.auth);

      try {
        const response = await fetch("/api/exec", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            method,
            path,
            auth: values.auth,
            bodyParam: values.body,
            queryParams: values.query,
            pathParams: values.path,
          }),
        });

        if (!response.ok) throw new Error();

        const body = await response.json();

        setResponse(body);
        setResponseIndex(-1);
      } catch (error) {
        setResponse(null);
        setResponseIndex(-1);
      } finally {
        setLoading(false);
      }
    },
    [path, method]
  );

  const initialValues = useMemo(() => {
    const pathParam: ApiParam = pathParams && {
      type: "object",
      fields: pathParams,
    };
    const queryParam: ApiParam = queryParams && {
      type: "object",
      fields: queryParams,
    };
    return {
      auth: typeof localStorage === "undefined" ? "" : localStorage.getItem(STORAGE_AUTH_KEY) || "",
      path: pathParam && apiParamInitialValue(pathParam),
      query: queryParam && apiParamInitialValue(queryParam),
      body: bodyParam && apiParamInitialValue(bodyParam),
    };
  }, [bodyParam, pathParams, queryParams]);

  return (
    <Formik<FormValues> initialValues={initialValues} onSubmit={execCallback}>
      <Form autoComplete="off" className={styles.form}>
        <div className="row row--no-gutters">
          <div className="col">
            <div className={styles.url}>
              <span className={styles.method}>{method}</span>
              {process.env.API_HOST}
              {path}
            </div>

            {pathParams && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>PATH PARAMS</div>

                <ApiParamField param={{ type: "object", fields: pathParams }} prefix="path" />
              </div>
            )}

            {queryParams && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>QUERY PARAMS</div>

                <ApiParamField param={{ type: "object", fields: pathParams }} prefix="query" />
              </div>
            )}

            {bodyParam && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>BODY PARAM</div>

                <ApiParamField param={bodyParam} prefix="body" />
              </div>
            )}

            <div className={styles.section}>
              <div className={styles.sectionTitle}>Responses</div>

              {responses.map((response, index) => (
                <div key={index} className={styles.section}>
                  <ApiResponseField
                    field={{
                      name: `${response.status} ${response.description}`,
                      ...response.body,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col col--5">
            <div className={styles.runner}>
              <div className={styles.inlineForm}>
                <div className={styles.sectionTitle}>AUTH TOKEN</div>

                <Field name="auth" className={styles.input} />

                <ApiParamButton type="submit" disabled={loading}>
                  Try It
                </ApiParamButton>
              </div>

              <ApiExamples method={method} path={path} />

              <div className={styles.section}>
                <div className={styles.inlineForm}>
                  <div className={styles.sectionTitle}>
                    Response {responseIndex !== -1 && "Example"}
                  </div>
                  <select
                    value={responseIndex}
                    className={styles.input}
                    onChange={handleResponseSelect}
                  >
                    {responseIndex === -1 && (
                      <option disabled value={-1}>
                        {response?.status} Test Request
                      </option>
                    )}

                    {responses.map((response, index) => (
                      <option key={index} value={index}>
                        {response.status} {response.description}
                      </option>
                    ))}
                  </select>
                </div>

                <CodeBlock className="language-json">
                  {responseIndex === -1
                    ? response
                      ? JSON.stringify(response.body, null, 2)
                      : "Error with Test Request"
                    : responseToString(responses[responseIndex].body)}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ApiReference;
