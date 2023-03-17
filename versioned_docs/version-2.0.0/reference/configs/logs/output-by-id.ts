import { ApiReferenceProps } from "@site/src/components/ApiReference";

import MessageOutputItem from "../schemas/MessageOutputItem";

const config: ApiReferenceProps = {
  description: "Fetch the output of rendered events of a message you've previously sent.",
  method: "GET",
  path: "/messages/:message_id/output",
  pathParams: [
    {
      type: "string",
      name: "message_id",
      required: true,
      example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
      description:
        "A unique identifier associated with the message you wish to retrieve (results from a send).",
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
            type: "array",
            name: "results",
            description: "An array of render output of a previously sent message",
            field: MessageOutputItem,
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
    {
      status: 404,
      description: "Message Not Found",
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
