import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Preferences from "../schemas/Preferences";

const config: ApiReferenceProps = {
  description:
    "Subscribes the users to the list, overwriting existing subscriptions. If the List does not exist, it will be automatically created.",
  method: "PUT",
  path: "/lists/:list_id/subscriptions",
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
        type: "array",
        name: "recipients",
        description: "An array of list subscriptions",
        field: {
          type: "object",
          fields: [
            {
              type: "string",
              name: "recipientId",
              required: true,
              description: "The id of the recipient intended to subscribe to this List.",
              example: "0460766e-8463-4905-ae98-b72c7aef41d6",
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
      description: "Successfully subscribed",
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
