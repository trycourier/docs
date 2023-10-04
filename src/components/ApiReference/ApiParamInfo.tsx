import React from "react";
import Markdown from "markdown-to-jsx";

import { ApiParam } from "./ApiParamField";

import { Param } from "../Params";

interface ApiParamInfoProps {
  param: ApiParam;
}

const ApiParamInfo = ({ param }: ApiParamInfoProps) => {
  const getEnumString = () => {
    if (
      "type" in param &&
      param.type === "string" &&
      "enum" in param &&
      Array.isArray(param.enum) &&
      param.enum.length > 0
    )
      return param.enum;
    return [];
  };

  const enumString = getEnumString().reduce((a, c, i) => a + (i === 0 ? "" : " | ") + `"${c}"`, "");

  return (
    <Param name={param.name ?? enumString} type={param.type} required={param.required}>
      {param.description && <Markdown>{param.description}</Markdown>}
    </Param>
  );
};

export default ApiParamInfo;
