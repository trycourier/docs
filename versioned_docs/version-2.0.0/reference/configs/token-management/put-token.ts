import { ApiReferenceProps } from "@site/src/components/ApiReference";
import { BaseUserTokenFields } from "../schemas/UserToken";

const config: ApiReferenceProps = {
  description:
    "Adds a single token to a user and overwrites a matching existing token.",
  method: "PUT",
  path: "/users/:user_id/tokens/:token",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      description: "The user's ID. This can be any uniquely identifiable string.",
      example: "user-1234",
    },
    {
      type: "string",
      name: "token",
      required: true,
      description: "The full token string.",
      example: "ABW7HO9Y7XAQXZ7Y",
    },
  ],
  bodyParam: {
    type: "object",
    fields: [
      ...BaseUserTokenFields,
      {
        type: "string",
        name: "token",
        required: false,
        description: "(Optional) Full body of the token. Must match token in URL.",
        example: "ABW7HO9Y7XAQXZ7Y",
      },
    ],
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
