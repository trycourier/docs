import React, { useMemo } from "react";
import { ApiReferenceProps, FormValues } from ".";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";
import { Formik } from "formik";

import styles from "./styles.module.css";
import Header2 from "../Header2";

const ApiReferencePathParams = ({
  pathParams,
}: NonNullable<Pick<ApiReferenceProps, "pathParams">>) => {
  const initialValues = useMemo(() => {
    const pathParam: ApiParam = pathParams && {
      type: "object",
      fields: pathParams,
    };
    return {
      path: pathParam && apiParamInitialValue(pathParam),
    };
  }, [pathParams]);

  if (!pathParams) return <></>;

  return (
    <div className={styles.section}>
      <Header2>Path Parameters</Header2>
      <Formik<Pick<FormValues, "path">> initialValues={initialValues} onSubmit={() => {}}>
        <ApiParamField param={{ type: "object", fields: pathParams }} prefix="path" isRoot />
      </Formik>
    </div>
  );
};

export default ApiReferencePathParams;
