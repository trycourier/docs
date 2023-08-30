import { ApiReferenceProps } from "@site/src/components/ApiReference";

import BulkJob from "../schemas/BulkJobCreate";

const config: ApiReferenceProps = {
  description: "Create a Bulk Job",
  method: "POST",
  path: "/bulk",
  bodyParam: BulkJob,
  responses: [
    {
      status: 201,
      description: "CREATED",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "jobId",
            description: "A unique identifier associated with the bulk job.",
            example: "1-61e9dd53-b5bb6c863b7ffbe83ad4b28d",
          },
        ],
      },
    },
    {
      status: 400,
      description: "Bad Request",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Error Message",
          },
          {
            type: "string",
            name: "type",
            description: "The type of error that occurred.",
            enum: ["invalid_request_error"],
            example: "invalid_request_error",
          },
        ],
      },
    },
  ],
};

export default config;
