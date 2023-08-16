import React from "react";
import Markdown from "markdown-to-jsx";

import { ApiParam } from "./ApiParamField";

import { Param } from "../Params";

interface ApiParamInfoProps {
  param: ApiParam;
}

const ApiParamInfo = ({ param }: ApiParamInfoProps) => (
  <Param name={param.name} type={param.type} required={param.required}>
    {param.description && <Markdown>{param.description}</Markdown>}
  </Param>
);

export default ApiParamInfo;
