import { ApiReferenceProps } from "@site/src/components/ApiReference";
import topicPreferenceInput from "../schemas/topic-preference-input";
const config: ApiReferenceProps = {
  description: "Update or Create user preferences for a specific subscription topic",
  method: "PUT",
  path: "/users/:user_id/preferences/:topic_id",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      example: "example_user_id",
      description:
        "A unique identifier associated with the user whose preferences you wish to update.",
    },
    {
      type: "string",
      name: "topic_id",
      required: true,
      example: "FW0YU64P4TMYKMMHH67D6FENX8VS",
      description: "A unique identifier associated with a subscription topic.",
    },
  ],
  bodyParam: topicPreferenceInput,
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            example: "success",
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
