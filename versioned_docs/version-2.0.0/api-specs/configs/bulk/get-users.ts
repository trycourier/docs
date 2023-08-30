import { ApiReferenceProps } from "@site/src/components/ApiReference";

import BulkJobGetUsers from "../schemas/BulkJobGetUsers";

const config: ApiReferenceProps = {
  description: "Get Bulk Job Users",
  method: "GET",
  path: "/bulk/:job_id/users",
  pathParams: [
    {
      type: "string",
      name: "job_id",
      required: true,
      description: "A unique identifier representing the bulk job",
      example: "1-61e9dd53-b5bb6c863b7ffbe83ad4b28d",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: BulkJobGetUsers,
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
