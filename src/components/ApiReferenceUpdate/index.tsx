import React from "react";

import styles from "./styles.module.css";

import { ApiResponse } from "./ApiResponseField";
import ApiParamField, { ApiParam } from "./ApiParamField";
import ApiReferenceContainer from "./ApiReferenceContainer";
import ApiReferenceQueryParams from "./ApiReferenceQueryParams";
import ApiReferenceResponses from "./ApiReferenceResponses";
import ApiReferenceRequestExample from "./ApiReferenceRequestExample";
import APiReferenceResponseExample from "./APiReferenceResponseExample";

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
  path: object;
  query: object;
  body: object;
}

const ApiReference = ({
  description,
  method,
  path,
  pathParams,
  queryParams,
  bodyParam,
  responses,
}: ApiReferenceProps) => {
  return (
    <ApiReferenceContainer
      path={path}
      description={description}
      pathParams={pathParams}
      queryParams={queryParams}
      bodyParam={bodyParam}
    >
      {pathParams && (
        <div className={styles.section}>
          <p>
            <strong>PATH PARAMS</strong>
          </p>
          <ApiParamField param={{ type: "object", fields: pathParams }} prefix="path" />
        </div>
      )}
      {queryParams && <ApiReferenceQueryParams queryParams={queryParams} />}
      {bodyParam && (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>BODY PARAM</div>

          <div className={styles.group}>
            <ApiParamField param={bodyParam} prefix="body" />
          </div>
        </div>
      )}
      {responses && <ApiReferenceResponses responses={responses} />}
      <ApiReferenceRequestExample method={method} path={path} />
      {responses && <APiReferenceResponseExample responses={responses} />}
    </ApiReferenceContainer>
  );
};

export default ApiReference;
