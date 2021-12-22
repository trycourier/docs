import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import AccessorType from "./AccessorType";
import RunContext from "./RunContext";

const InvokeStep: ApiParam = {
  type: "object",
  displayName: "InvokeStep",
  fields: [
    {
      type: "string",
      name: "action",
      required: true,
      example: "invoke",
      enum: ["invoke"],
    },
    {
      type: "oneOf",
      name: "template",
      options: [
        {
          type: "string",
          required: true,
          displayName: "string",
          description: "The templateId of the automation template to invoke.",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "context",
      options: [
        {
          type: "string",
          displayName: "string",
          description: "A run context definition, available to every step at execution.",
        },
        RunContext,
        AccessorType,
      ],
    },
    {
      type: "string",
      name: "if",
      description:
        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
    },
    {
      type: "string",
      name: "ref",
      description: "A pointer to step and its data.",
    },
  ],
};

export default InvokeStep;
