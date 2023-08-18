import React from "react";
import { ApiReferenceProps } from "../ApiReference";
import Markdown from "markdown-to-jsx";

type PropType = NonNullable<Pick<ApiReferenceProps, "method" | "path" | "description">>;

const ApiReferenceEndPoint = ({ method, path, description }: PropType) => {
  return (
    <>
      <p>
        <strong>URL: </strong>
        <code>
          {process.env.API_HOST}
          {path}
        </code>
      </p>
      <p>
        <strong>Method: </strong>
        <code>{method}</code>
      </p>
      <Markdown>{description}</Markdown>
    </>
  );
};

export default ApiReferenceEndPoint;
