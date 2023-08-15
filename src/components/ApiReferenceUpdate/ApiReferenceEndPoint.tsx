import React from "react";
import { ApiReferenceProps } from "../ApiReference";

type PropType = NonNullable<Pick<ApiReferenceProps, "method" | "path">>;

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
        <div>
          <strong>Method: </strong>
          <code>{method}</code>
        </div>
      </p>
    </>
  );
};

export default ApiReferenceEndPoint;
