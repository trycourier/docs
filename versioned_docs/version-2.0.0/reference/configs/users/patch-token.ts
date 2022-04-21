import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Apply a JSON Patch (RFC 6902) to the specified token.",
  method: "PATCH",
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
      {
        type: "array",
        name: "patch",
        description: "An array of patch operations. [Learn more](http://jsonpatch.com/)",
        field: {
          type: "object",
          fields: [
            {
              type: "string",
              name: "op",
              required: true,
              enum: ["add", "remove", "replace", "copy", "move", "test"],
              description: "The operation to perform.",
              example: "replace",
            },
            {
              type: "string",
              name: "path",
              required: true,
              description: "The JSON path specifying the part of the profile to operate on.",
              example: "/status",
            },
            {
              type: "string",
              name: "value",
              required: false,
              description: "The value for the operation.",
              example: "revoked",
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
