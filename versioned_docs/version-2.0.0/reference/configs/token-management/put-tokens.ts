import { ApiReferenceProps } from "@site/src/components/ApiReference";
import { BaseUserTokenFields } from "../schemas/UserToken";

const config: ApiReferenceProps = {
  description:
    "Adds multiple tokens to a user and overwrites matching existing tokens.",
  method: "PUT",
  path: "/users/:user_id/tokens",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      description: "The user's ID. This can be any uniquely identifiable string.",
      example: "user-1234",
    },
  ],
  bodyParam: {
    type: "array",
    field: {
      type: "object",
      fields: [
        {
          type: "string",
          name: "token",
          required: true,
          description: "Full body of the token. Must match token in URL.",
          example: "ABW7HO9Y7XAQXZ7Y",
        },
        ...BaseUserTokenFields,
      ],
    },
  },
  responses: [
    {
      status: 204,
      description: "OK",
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
