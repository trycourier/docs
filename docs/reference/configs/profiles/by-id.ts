import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Profile from "../schemas/Profile";
import Preferences from "../schemas/Preferences";

const config: ApiReferenceProps = {
  description: "Returns the specified recipient Profile.",
  method: "GET",
  path: "/profiles/:recipient_id",
  pathParams: [
    {
      type: "string",
      name: "recipient_id",
      required: true,
      description:
        "A unique identifier representing the recipient associated with the requested profile.",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          ...(Profile.type === "object" ? Profile.fields : []),
          {
            ...Preferences,
            name: "preferences",
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
