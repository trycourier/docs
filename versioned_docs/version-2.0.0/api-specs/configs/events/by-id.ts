import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Event from "../schemas/Event";

const config: ApiReferenceProps = {
  description: "Fetch a specific event by event ID.",
  method: "GET",
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
  responses: [
    {
      status: 200,
      description: "OK",
      body: Event,
    },
    {
      status: 404,
      description: "Event Not Found",
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
