import { ApiReferenceProps } from "@site/src/components/ApiReference";
import { UserToken } from "../schemas/UserToken";

const config: ApiReferenceProps = {
  description: "Get single token available for a `:token`",
  method: "GET",
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
      description: "The value of the token you are trying to get",
      example: "ABW7HO9Y7XAQXZ7Y",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: UserToken,
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
