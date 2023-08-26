import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Preferences from "../schemas/Preferences";

const config: ApiReferenceProps = {
  description:
    "Subscribes the given user to one or more lists. If the list does not exist, it will be created.",
  method: "POST",
  path: "/profiles/:user_id/lists",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      description:
        "A unique identifier representing the user associated with the requested profile.",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
    },
  ],
  bodyParam: {
    type: "object",
    fields: [
      {
        type: "array",
        name: "lists",
        field: {
          type: "object",
          fields: [
            {
              type: "string",
              name: "listId",
              description: "List id",
            },
            {
              ...Preferences,
              name: "preferences",
            },
          ],
        },
      },
    ],
  },
  responses: [
    {
      status: 204,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "status",
            example: "SUCCESS",
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
