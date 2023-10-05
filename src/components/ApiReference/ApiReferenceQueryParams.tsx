import React, { useMemo } from "react";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";

import styles from "./styles.module.css";
import { ApiReferenceProps, FormValues } from ".";
import { Formik } from "formik";
import Header2 from "../Header2";
type PropType = NonNullable<Pick<ApiReferenceProps, "queryParams">>;

const ApiReferenceQueryParams = ({ queryParams }: PropType) => {
  const initialValues = useMemo(() => {
    const queryParam: ApiParam = queryParams && {
      type: "object",
      fields: queryParams,
    };
    return {
      query: queryParam && apiParamInitialValue(queryParam),
    };
  }, [queryParams]);

  return (
    <div className={styles.section}>
      <Header2>Query Parameters</Header2>

      <Formik<Pick<FormValues, "query">> initialValues={initialValues} onSubmit={() => {}}>
        <ApiParamField param={{ type: "object", fields: queryParams }} prefix="query" isRoot />
      </Formik>
    </div>
  );
};

export default ApiReferenceQueryParams;
