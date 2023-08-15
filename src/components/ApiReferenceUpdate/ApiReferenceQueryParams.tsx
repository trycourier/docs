import React, { useMemo } from "react";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";

import styles from "./styles.module.css";
import { ApiReferenceProps } from ".";
import { Formik } from "formik";
import { FormValues } from "./ApiReferenceContainer";
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
      <p>
        <strong>Query Parameters:</strong>
      </p>

      <Formik<Pick<FormValues, "query">> initialValues={initialValues} onSubmit={() => {}}>
        <ApiParamField param={{ type: "object", fields: queryParams }} prefix="query" />
      </Formik>
    </div>
  );
};

export default ApiReferenceQueryParams;
