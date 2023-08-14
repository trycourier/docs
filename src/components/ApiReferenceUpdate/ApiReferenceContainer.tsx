import React, { useMemo } from "react";
import { Formik, Form } from "formik";
import Head from "@docusaurus/Head";

import styles from "./styles.module.css";

import { ApiParam, apiParamInitialValue } from "./ApiParamField";
import makeMetaDescription from "@site/src/utils/makeMetaDescription";
import Markdown from "markdown-to-jsx";
import { ApiReferenceProps } from ".";

export interface FormValues {
  path: object;
  query: object;
  body: object;
}

const deepCompact = (value: unknown) => {
  if (Array.isArray(value)) {
    const array = value.map(deepCompact).filter((x) => x != null);

    return array.length === 0 ? undefined : array;
  }

  if (typeof value === "object" && value !== null) {
    const object = Object.fromEntries(
      Object.entries(value)
        .map(([key, value]) => [key, deepCompact(value)])
        .filter(([key, value]) => value != null)
    );

    return Object.keys(object).length === 0 ? undefined : object;
  }

  return value;
};

const ApiReferenceContainer = ({
  description,
  path,
  pathParams,
  queryParams,
  bodyParam,
  children,
}: Pick<ApiReferenceProps, "description" | "path" | "pathParams" | "queryParams" | "bodyParam"> & {
  children: React.ReactNode;
}) => {
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
      path: pathParam && apiParamInitialValue(pathParam),
      query: queryParam && apiParamInitialValue(queryParam),
      body: bodyParam && apiParamInitialValue(bodyParam),
    };
  }, [bodyParam, pathParams, queryParams]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content={makeMetaDescription({ description: description, path: path })}
        />
      </Head>
      <Formik<FormValues> initialValues={initialValues} onSubmit={() => {}}>
        <Form autoComplete="off">
          <div className={styles.container}>
            {/** //!some global style is modifying this markdown, if removed this will break the response alignment in production
             */}
            <Markdown className={styles.section}>{""}</Markdown>
            {children}
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ApiReferenceContainer;
