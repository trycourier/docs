import { ApiReferenceProps } from "@site/src/components/ApiReference";

import invokeConfig from "./invoke";

const config: ApiReferenceProps = {
  description: "Retrieve information and status of a given automation run.",
  method: "GET",
  path: "/automations/runs/:run_id",
  pathParams: [
    {
      type: "string",
      name: "run_id",
      required: true,
      example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
      description: "A unique identifier associated with the automation run you wish to retrieve.",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: invokeConfig.bodyParam,
    },
  ],
};

export default config;
