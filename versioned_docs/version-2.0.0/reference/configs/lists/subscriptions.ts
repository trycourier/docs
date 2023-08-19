import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../schemas/Paging";
import ListSubscription from "../schemas/ListSubscription";

const config: ApiReferenceProps = {
  description: "Get the list's subscriptions.",
  method: "GET",
  path: "/lists/:list_id/subscriptions",
  pathParams: [
    {
      type: "string",
      name: "list_id",
      required: true,
      description: "A unique identifier associated with the list you wish to retrieve.",
      example: "example.list.id",
    },
  ],
  queryParams: [
    {
      type: "string",
      name: "cursor",
      description:
        "A unique identifier that allows for fetching the next set of list subscriptions",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            ...Paging,
            name: "paging",
          },
          {
            type: "array",
            name: "items",
            description: "An array of list subscriptions",
            field: ListSubscription,
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
