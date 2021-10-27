import React, { useState, useCallback } from "react";
import clsx from "clsx";
import { Formik, Form, Field } from "formik";
import CodeBlock from "@theme/CodeBlock";

import styles from "./styles.module.css";

import ApiResponseField, {
  ApiResponse,
  responseToString,
} from "./ApiResponseField";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";
import ApiParamButton from "./ApiParamButton";
import ApiParamBaseInput from "./ApiParamBaseInput";

export interface ApiReferenceProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description?: string;
  pathParams?: ApiParam[];
  queryParams?: ApiParam[];
  bodyParam?: ApiParam;
  responses: ApiResponse[];
}

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
  const [error, setError] = useState(false);

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
            auth: values.auth,
            bodyParam: values.body,
            queryParams: values.query,
            pathParams: values.path,
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
    [path, method]
  );

  const pathParam: ApiParam = pathParams && {
    type: "object",
    fields: pathParams,
  };
  const queryParam: ApiParam = queryParams && {
    type: "object",
    fields: queryParams,
  };

  return (
    <Formik
      initialValues={{
        auth: "dk_prod_D1APZA34G64MJGPEHVV2WRFQZQKR",
        path: pathParam && apiParamInitialValue(pathParam),
        query: queryParam && apiParamInitialValue(queryParam),
        body: bodyParam && apiParamInitialValue(bodyParam),
      }}
      onSubmit={execCallback}
    >
      {({ values }) => (
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

                  <ApiParamField
                    param={{ type: "object", fields: pathParams }}
                    prefix="path"
                  />
                </div>
              )}

              {queryParams && (
                <div className={styles.section}>
                  <div className={styles.sectionTitle}>QUERY PARAMS</div>

                  <ApiParamField
                    param={{ type: "object", fields: pathParams }}
                    prefix="query"
                  />
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
                <div className={styles.auth}>
                  <div className={styles.sectionTitle}>AUTH TOKEN</div>

                  <Field name="auth" className={styles.input} />

                  <ApiParamButton type="submit">Try It</ApiParamButton>
                </div>

                <div className={styles.tabbedCodeBlock}>
                  <div className={styles.tabbedCodeBlockTabs}>
                    <button className={styles.tabbedCodeBlockActiveTab}>
                      Node.js
                    </button>
                    <button>Python</button>
                    <button>Ruby</button>
                    <button>Go</button>
                    <button>PHP</button>
                    <button>Java</button>
                  </div>

                  <CodeBlock className="language-bash">
                    {`
curl --request ${method} \\
     --url ${process.env.API_HOST}${path} \\
     --header 'Accept: application/json' \\
     --header 'Authorization: Bearer ${values.auth}' \\
     --header 'Content-Type: application/json' \\
     --data '
${JSON.stringify(values.body, null, 2)}
'
                  `.trim()}
                  </CodeBlock>
                </div>

                <div className={styles.section}>
                  <div className={styles.sectionTitle}>
                    Response
                    <select className={styles.input}>
                      {responses.map((response, index) => (
                        <option key={index}>
                          {response.status} {response.description}
                        </option>
                      ))}

                      <option disabled>Custom</option>
                    </select>
                  </div>
                  {/* {responses.map((response, index) => (
                    <CodeBlock key={index} className="language-json">
                      {responseToString(response.body)}
                    </CodeBlock>
                  ))} */}
                </div>
              </div>
            </div>
          </div>

          {/* <CodeBlock className="language-json">
            {JSON.stringify(values, null, 2)}
          </CodeBlock>

          {response && (
            <CodeBlock className="language-json">
              {JSON.stringify(response, null, 2)}
            </CodeBlock>
          )} */}
        </Form>
      )}
    </Formik>
  );
};

export default ApiReference;
