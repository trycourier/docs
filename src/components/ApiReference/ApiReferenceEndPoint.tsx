import React from "react";
import { ApiReferenceProps } from "../ApiReference";

type PropType = NonNullable<Pick<ApiReferenceProps, "method" | "path" | "description">>;

const ApiReferenceEndPoint = ({ method, path }: PropType) => {
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
    </>
  );
};

export default ApiReferenceEndPoint;
