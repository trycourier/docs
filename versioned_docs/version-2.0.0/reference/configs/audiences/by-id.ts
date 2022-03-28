import { ApiReferenceProps } from "@site/src/components/ApiReference";
import Audience from "../schemas/Audience";

const config: ApiReferenceProps = {
  description: "Returns the specified audience by id.",
  method: "GET",
  path: "/audiences/:audience_id",
  pathParams: [
    {
      type: "string",
      name: "audience_id",
      required: true,
      description: "A unique identifier representing the audience_id",
      example: "developer-audience",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        ...Audience,
      },
    },
    {
      status: 400,
      description: "Bad Request",
      body: {
        type: "object",
        description: "Error Response",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example:
              "filter operator should be equal to one of the allowed values AND, EQ, GT, GTE, INCLUDES, LT, LTE, NEQ, OMIT, OR",
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
