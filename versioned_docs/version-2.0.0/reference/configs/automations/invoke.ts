import { ApiReferenceProps } from "@site/src/components/ApiReference";

import AutomationRun from "../schemas/AutomationRun";

const config: ApiReferenceProps = {
  description: "Invoke an ad hoc automation run. This endpoint accepts a JSON payload with a series of automation steps. For information about what steps are available, checkout the ad hoc automation guide [here](https://www.courier.com/docs/automations/steps/).",
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
