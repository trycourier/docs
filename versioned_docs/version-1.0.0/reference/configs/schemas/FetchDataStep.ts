import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import AccessorType from "./AccessorType";

const FetchDataStep: ApiParam = {
  type: "object",
  displayName: "FetchDataStep",
  fields: [
    {
      type: "string",
      name: "action",
      required: true,
      example: "fetch-data",
      enum: ["fetch-data"],
    },
    {
      type: "string",
      name: "merge_strategy",
      required: true,
      enum: ["replace", "none", "overwrite", "soft-merge"],
    },
    {
      type: "object",
      name: "webhook",
      fields: [
        {
          type: "string",
          name: "url",
          description: "The url resource, whose response will mutate run context.",
        },
        {
          type: "json",
          name: "body",
          description: "The request payload.",
        },
        {
          type: "json",
          name: "headers",
          description: "The request headers.",
        },
        {
          type: "json",
          name: "params",
          description: "The request parameters.",
        },
        {
          type: "string",
          name: "method",
          description: "The http verb of the request.",
          enum: ["GET", "POST"],
        },
      ],
    },
    {
      type: "oneOf",
      name: "idempotency_expiry",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "A unix epoch timestamp (seconds) or an ISO_8601 date string that describes how long the idempotency_key is valid.",
        },
        {
          type: "number",
          displayName: "number",
        },
        AccessorType,
      ],
    },
    {
      type: "oneOf",
      name: "idempotency_key",
      options: [
        {
          type: "string",
          displayName: "string",
          description:
            "A unique value generated by the client which the server uses to recognize subsequent retries of the same request.",
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

export default FetchDataStep;
