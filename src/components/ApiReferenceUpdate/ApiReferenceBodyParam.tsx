import React, { useMemo } from "react";
import { ApiReferenceProps, FormValues } from "../ApiReference";
import ApiParamField, { apiParamInitialValue } from "./ApiParamField";

import styles from "./styles.module.css";
import { Formik } from "formik";

const ApiReferenceBodyParam = ({
  bodyParam,
}: NonNullable<Pick<ApiReferenceProps, "bodyParam">>) => {
  const initialValues = useMemo(() => {
    return {
      body: bodyParam && apiParamInitialValue(bodyParam),
    };
  }, [bodyParam]);
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>BODY PARAM</div>

      <div className={styles.group}>
        <Formik<Pick<FormValues, "body">> initialValues={initialValues} onSubmit={() => {}}>
          <ApiParamField param={bodyParam} prefix="body" />
        </Formik>
      </div>
    </div>
  );
};

export default ApiReferenceBodyParam;
