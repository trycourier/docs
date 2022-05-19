import { ApiReferenceProps } from "@site/src/components/ApiReference";
import Audience from "../schemas/Audience";

const config: ApiReferenceProps = {
  description: "Creates or updates audience.",
  method: "PUT",
  path: "/audiences/:audience_id",
  bodyParam: Audience,
  pathParams: [
    {
      type: "string",
      name: "audience_id",
      required: true,
      description: "A unique identifier representing the audience id",
      example: "my-favorite-developer-audience",
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
            type: "object",
            fields: [Audience],
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
