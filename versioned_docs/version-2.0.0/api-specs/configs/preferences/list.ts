import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Notification from "../schemas/Notification";
import Category from "../schemas/Category";

const config: ApiReferenceProps = {
  description: "Get a list of existing notifications and categories",
  method: "GET",
  path: "/preferences",
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "array",
            name: "uncategorized",
            field: Notification,
          },
          {
            type: "array",
            name: "categories",
            field: Category,
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
