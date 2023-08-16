import Head from "@docusaurus/Head";
import React from "react";
import { ApiReferenceProps } from "../ApiReference";
import makeMetaDescription from "@site/src/utils/makeMetaDescription";

const ApiReferenceMeta = ({
  path,
  description,
}: Pick<ApiReferenceProps, "path" | "description">) => {
  return (
    <Head>
      <meta
        name="description"
        content={makeMetaDescription({ description: description, path: path })}
      />
    </Head>
  );
};

export default ApiReferenceMeta;
