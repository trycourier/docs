import { ApiReferenceProps } from "@site/src/components/ApiReference";

import createConfig from "./create";

const config: ApiReferenceProps = {
  description: "Replace an existing brand with the supplied values.",
  method: "PUT",
  path: "/brands/:brand_id",
  pathParams: [
    {
      type: "string",
      name: "brand_id",
      required: true,
      example: "C8CPX6HQZ5M7Q5KAMW5CXC4N98DH",
      description: "A unique identifier associated with the brand you wish to update.",
    },
  ],
  bodyParam:
    createConfig.bodyParam.type === "object"
      ? {
          ...createConfig.bodyParam,
          fields: createConfig.bodyParam.fields.filter((field) => field.name !== "id"),
        }
      : undefined,
  responses: [
    {
      status: 200,
      description: "Successfully replaced",
      body: createConfig.responses[0].body,
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
