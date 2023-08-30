import { ApiReferenceProps } from "@site/src/components/ApiReference";

import AutomationTemplate from "../schemas/AutomationTemplate";

const config: ApiReferenceProps = {
  description: "Invoke an automation run from an automation template.",
  method: "POST",
  path: "/automations/:templateId/invoke",
  pathParams: [
    {
      type: "string",
      name: "templateId",
      required: true,
      description:
        "A unique identifier representing the automation template to be invoked. This could be the Automation Template ID or the Automation Template Alias.",
    },
  ],
  bodyParam: AutomationTemplate,
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
