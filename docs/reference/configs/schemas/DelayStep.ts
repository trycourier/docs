import { ApiParam } from "@site/src/components/ApiReference";

import AccessorType from "./AccessorType";

const DelayStep: ApiParam = {
  type: "object",
  displayName: "DelayStep",
  fields: [
    {
      type: "string",
      name: "action",
      required: true,
      example: "delay",
      enum: ["delay"],
    },
    {
      type: "oneOf",
      name: "duration",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "The human readable time duration. A duration value and unit is required, e.g. 5 minutes",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "until",
      options: [
        {
          type: "string",
          displayName: "string",
          description: "The ISO 8601 timestamp that describes the length of the delay.",
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

export default DelayStep;
