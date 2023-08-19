import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Delete a subscription to a list by list ID and user ID.",
  method: "DELETE",
  path: "/lists/:list_id/subscriptions/:user_id",
  pathParams: [
    {
      type: "string",
      name: "list_id",
      required: true,
      description: "A unique identifier associated with the list you wish to retrieve.",
      example: "example.list.id",
    },
    {
      type: "string",
      name: "recipient_id",
      required: true,
      description: "A unique identifier representing the user associated with the list",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
    },
  ],
  responses: [
    {
      status: 204,
      description: "Successfully deleted",
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
