import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Brand from "../schemas/Brand";

const config: ApiReferenceProps = {
  description: "Fetch a specific brand by brand ID.",
  method: "GET",
  path: "/brands/:brand_id",
  pathParams: [
    {
      type: "string",
      name: "brand_id",
      required: true,
      description: "A unique identifier associated with the brand you wish to retrieve.",
    },
  ],
  responses: [
    {
      status: 200,
      description: "Successfully retrieved",
      body: Brand,
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
