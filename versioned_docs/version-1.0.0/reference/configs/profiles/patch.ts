import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description:
    "Apply a JSON Patch (RFC 6902) to the specified profile or create one if a profile doesn't already exist.",
  method: "PATCH",
  path: "/profiles/:recipient_id",
  pathParams: [
    {
      type: "string",
      name: "recipient_id",
      required: true,
      description:
        "A unique identifier representing the recipient associated with the requested profile.",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
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
              example: "/email",
            },
            {
              type: "string",
              name: "value",
              required: true,
              description: "The value for the operation.",
              example: "test@example.com",
            },
          ],
        },
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
