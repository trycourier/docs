import { ApiReferenceProps } from "@site/src/components/ApiReference";
import Audience from "../schemas/Audience";

const config: ApiReferenceProps = {
  description: "Get the audiences associated with the `authorization` token.",
  method: "GET",
  path: "/audiences",
  queryParams: [
    {
      type: "string",
      name: "cursor",
      description:
        "A unique identifier that allows for fetching the next set of audiences",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA",
    },
  ],
  responses: [
    {
      status: 200,
      description: "Audiences associated with the `authorization` token.",
      body: {
        type: "object",
        displayName: "List of Audiences",
        fields: [
          {
            type: "array",
            name: "items",
            description: "List of audiences",
            field: {
              type: "object",
              fields: [Audience],
            },
          },
          {
            type: "object",
            name: "paging",
            description: "The bulk job user data paging info",
            fields: [
              {
                type: "string",
                name: "cursor",
                description: "Pagination cursor to ask for result from a specific point",
                example: "randomcursor",
              },
              {
                type: "boolean",
                name: "more",
                description: "Flag that indicates there are more results",
                example: true,
              },
            ],
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
            example:
              "filteroperator should be equal to one of the allowed values AND, EQ, GT, GTE, INCLUDES, LT, LTE, NEQ, OMIT, OR",
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
