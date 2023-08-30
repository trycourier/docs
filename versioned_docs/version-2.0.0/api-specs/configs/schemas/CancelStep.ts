import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import AccessorType from "./AccessorType";

const CancelStep: ApiParam = {
  type: "object",
  displayName: "CancelStep",
  fields: [
    {
      type: "string",
      name: "action",
      required: true,
      example: "cancel",
      enum: ["cancel"],
    },
    {
      type: "oneOf",
      name: "cancelation_token",
      required: true,
      options: [
        {
          type: "string",
          displayName: "string",
          description: "The string that is associated with the cancelable automation run.",
        },
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
      description: "A read only pointer to a step and its data.",
    },
  ],
};

export default CancelStep;
