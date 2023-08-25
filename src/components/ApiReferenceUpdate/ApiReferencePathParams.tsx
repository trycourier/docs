import React, { useMemo } from "react";
import { ApiReferenceProps, FormValues } from "../ApiReference";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";
import { Formik } from "formik";

import styles from "./styles.module.css";

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
      <p>
        <strong>PATH PARAMS</strong>
      </p>
      <Formik<Pick<FormValues, "path">> initialValues={initialValues} onSubmit={() => {}}>
        <ApiParamField param={{ type: "object", fields: pathParams }} prefix="path" isRoot />
      </Formik>
    </div>
  );
};

export default ApiReferencePathParams;
