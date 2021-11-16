import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Preferences from "../schemas/Preferences";

const config: ApiReferenceProps = {
  description: "Create or replace an existing list with the supplied values.",
  method: "PUT",
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
  bodyParam: {
    type: "object",
    fields: [
      {
        type: "string",
        name: "name",
        required: true,
        example: "Example List Name",
        description: "List name",
      },
      {
        ...Preferences,
        name: "preferences",
      },
    ],
  },
  responses: [
    {
      status: 204,
      description: "Successfully created",
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
