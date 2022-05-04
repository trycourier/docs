import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Returns a new access token.",
  method: "POST",
  path: "/auth/issue-token",
  bodyParam: {
    type: "object",
    fields: [
      {
        type: "string",
        name: "scope",
        required: true,
        description: "Permissions to apply to the token.",
        example: "user_id:me read:messages",
      },
      {
        type: "string",
        name: "expires_in",
        required: false,
        description:
          "A string describing the time span the token is valid for. Can also be a number instead of a string (in seconds). See https://github.com/vercel/ms for examples.",
        example: "2 days",
      },
    ],
  },
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "token",
            description: "The issued token.",
            example: "5e2b2615.05efbb3acab9172f88dd3f6f",
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
