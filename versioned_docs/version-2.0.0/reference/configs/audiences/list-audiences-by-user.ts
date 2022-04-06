import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Get list of audiences user is a member of.",
  method: "GET",
  path: "/members/:member_id/audiences",
  pathParams: [
    {
      type: "string",
      name: "member_id",
      required: true,
      description: "A unique identifier representing the user id",
      example: "suhas_rd",
    },
  ],
  queryParams: [
    {
      type: "string",
      name: "cursor",
      description: "A unique identifier that allows for fetching the next set of audiences",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA",
    },
  ],
  responses: [
    {
      status: 200,
      description: "Audience members associated with the audience by `audience_id`",
      body: {
        type: "object",
        displayName: "List of audiences user is a member of",
        fields: [
          {
            type: "array",
            name: "items",
            description: "List of audiences",
            field: {
              type: "object",
              fields: [
                {
                  type: "string",
                  name: "audience_id",
                  description: "A unique identifier representing the audience_id",
                  example: "my-favorite-developers",
                },
                {
                  type: "number",
                  name: "audience_version",
                  description: "represents the version of the audience that this member belongs to",
                  example: 1,
                },
              ],
            },
          },
          {
            type: "object",
            name: "paging",
            description: "Pagination information",
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
