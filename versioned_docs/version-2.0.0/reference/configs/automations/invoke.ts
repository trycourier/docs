import { ApiReferenceProps } from "@site/src/components/ApiReference";

import AutomationRun from "../schemas/AutomationRun";

const config: ApiReferenceProps = {
  method: "POST",
  path: "/automations/invoke",
  bodyParam: AutomationRun,
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "runId",
            description: "A unique identifier associated with the automation run.",
            example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
          },
        ],
      },
    },
  ],
};

export default config;
