import { ApiReferenceProps } from "@site/src/components/ApiReference";

import BulkJobIngest from "../schemas/BulkJobIngest";

const config: ApiReferenceProps = {
  description: "Ingest user data into a Bulk Job",
  method: "POST",
  path: "/bulk/:job_id",
  pathParams: [
    {
      type: "string",
      name: "job_id",
      required: true,
      description: "A unique identifier representing the bulk job",
      example: "1-61e9dd53-b5bb6c863b7ffbe83ad4b28d",
    },
  ],
  bodyParam: BulkJobIngest,
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "array",
            name: "errors",
            description: "Errors occurred during job data ingestion",
            field: {
              type: "json",
              name: "ingest error",
              example: {
                error: "Duplicate user",
                user: {
                  email: "u1@courier.com",
                  user_id: "u1",
                  data: {
                    recipientName: "Foo",
                  },
                },
              },
            },
          },
          {
            type: "number",
            name: "total",
            description: "Total count of users that have been successfully ingested",
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
