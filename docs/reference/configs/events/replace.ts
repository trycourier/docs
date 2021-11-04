import { ApiReferenceProps } from "@site/src/components/ApiReference";

import EventMapping from "../schemas/EventMapping";

const config: ApiReferenceProps = {
  description:
    "Replace an existing event with the supplied values or create a new event if one does not already exist.",
  method: "PUT",
  path: "/events/:event_id",
  pathParams: [
    {
      type: "string",
      name: "event_id",
      required: true,
      description: "A unique identifier associated with the event you wish to retrieve.",
      example: "new-user",
    },
  ],
  bodyParam: EventMapping,
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
            description: "A unique event identifier",
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
