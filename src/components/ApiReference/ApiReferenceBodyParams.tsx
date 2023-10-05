import React, { useMemo } from "react";
import { ApiReferenceProps, FormValues } from "../ApiReference";
import ApiParamField, { apiParamInitialValue } from "./ApiParamField";

import styles from "./styles.module.css";
import { Formik } from "formik";
import Header2 from "../Header2";

const ApiReferenceBodyParams = ({
  bodyParam,
}: NonNullable<Pick<ApiReferenceProps, "bodyParam">>) => {
  const initialValues = useMemo(() => {
    return {
      body: bodyParam && apiParamInitialValue(bodyParam),
    };
  }, [bodyParam]);
  return (
    <div className={styles.section}>
      <Header2>Body Parameters</Header2>

      <Formik<Pick<FormValues, "body">> initialValues={initialValues} onSubmit={() => {}}>
        <ApiParamField param={bodyParam} prefix="body" isRoot />
      </Formik>
    </div>
  );
};

export default ApiReferenceBodyParams;
