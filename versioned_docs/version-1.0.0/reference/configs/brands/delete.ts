import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Delete a brand by brand ID.",
  method: "DELETE",
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
      status: 204,
      description: "Successfully deleted",
    },
    {
      status: 409,
      description: "Conflict",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Cannot delete default brand",
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
