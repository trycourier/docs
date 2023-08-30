import { ApiReferenceProps } from "@site/src/components/ApiReference";

import ByList from "../schemas/ByList";
import ByListPattern from "../schemas/ByListPattern";

const config: ApiReferenceProps = {
  description: "Send a notification to list(s) subscribers",
  method: "POST",
  path: "/send/list",
  bodyParam: {
    type: "oneOf",
    options: [ByList, ByListPattern],
  },
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "messageId",
            description:
              "A unique identifier associated with the messages sent to a list's subscribers.",
            example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
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
