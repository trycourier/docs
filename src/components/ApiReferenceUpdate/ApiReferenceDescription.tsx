import React from "react";
import { ApiReferenceProps } from "../ApiReference";
import Markdown from "markdown-to-jsx";

type PropType = NonNullable<Pick<ApiReferenceProps, "method" | "path" | "description">>;

const ApiReferenceDescription = ({ description }: PropType) => {
  return (
    <p>
      <Markdown>{ description }</Markdown>
    </p>
  );
};

export default ApiReferenceDescription;
