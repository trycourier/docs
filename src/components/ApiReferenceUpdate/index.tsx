import React from "react";

import { ApiResponse } from "./ApiResponseField";
import { ApiParam } from "./ApiParamField";
import ApiReferenceQueryParams from "./ApiReferenceQueryParams";
import ApiReferenceResponses from "./ApiReferenceResponses";
import ApiReferenceRequestExample from "./ApiReferenceRequestExample";
import ApiReferenceResponseExample from "./ApiReferenceResponseExample";
import ApiReferenceEndPoint from "./ApiReferenceEndPoint";
import ApiReferenceMeta from "./ApiReferenceMeta";
import ApiReferencePathParams from "./ApiReferencePathParams";
import ApiReferenceBodyParams from "./ApiReferenceBodyParams";
import ApiReferenceDescription from "./ApiReferenceDescription";

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
    <>
      <ApiReferenceMeta description={description} path={path} />
      <ApiReferenceEndPoint method={method} path={path} description={description} />
      {pathParams && <ApiReferencePathParams pathParams={pathParams} />}
      {queryParams && <ApiReferenceQueryParams queryParams={queryParams} />}
      {bodyParam && <ApiReferenceBodyParams bodyParam={bodyParam} />}
      {responses && <ApiReferenceResponses responses={responses} />}
      <ApiReferenceRequestExample
        method={method}
        path={path}
        pathParams={pathParams}
        queryParams={queryParams}
        bodyParam={bodyParam}
      />
      {responses && <ApiReferenceResponseExample responses={responses} />}
    </>
  );
};

export default ApiReference;

export {
  ApiReferenceQueryParams,
  ApiReferenceResponses,
  ApiReferenceRequestExample,
  ApiReferenceResponseExample,
  ApiReferenceEndPoint,
  ApiReferenceMeta,
  ApiReferencePathParams,
  ApiReferenceBodyParams,
  ApiReferenceDescription,
};
