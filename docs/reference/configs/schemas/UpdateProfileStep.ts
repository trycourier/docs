import { ApiParam } from "@site/src/components/ApiReference";

import AccessorType from "./AccessorType";

const UpdateProfileStep: ApiParam = {
  type: "object",
  displayName: "UpdateProfileStep",
  fields: [
    {
      type: "string",
      name: "action",
      required: true,
      example: "update-profile",
      enum: ["update-profile"],
    },
    {
      type: "oneOf",
      name: "recipient_id",
      options: [
        {
          type: "string",
          required: true,
          displayName: "string",
          description:
            "A unique identifier associated with the recipient you want to update profile of",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "merge",
      options: [
        {
          type: "string",
          required: true,
          displayName: "string",
          description: "Merge algorithm (none, overwrite, replace or soft-merge)",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "profile",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "An object that includes any key-value pairs associated with the recipient profile",
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
      description: "A pointer to step and its data.",
    },
  ],
};

export default UpdateProfileStep;
