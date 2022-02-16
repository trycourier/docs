import { ApiReferenceProps } from "@site/src/components/ApiReference";

import List from "../schemas/List";

const config: ApiReferenceProps = {
  description: "Get the list items.",
  method: "GET",
  path: "/lists/:list_id",
  pathParams: [
    {
      type: "string",
      name: "list_id",
      required: true,
      description: "A unique identifier associated with the list you wish to retrieve.",
      example: "example.list.id",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: List,
    },
    {
      status: 404,
      description: "Not Found",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Not Found",
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
