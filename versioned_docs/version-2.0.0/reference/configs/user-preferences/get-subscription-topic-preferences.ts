import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../../../reference/configs/schemas/Paging";
import SubscriptionTopic from "../schemas/subscription-topic";

const config: ApiReferenceProps = {
  description: "Fetch user preferences for a specific subscription topic.",
  method: "GET",
  path: "/users/:user_id/preferences/:topic_id",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      example: "example_user_id",
      description:
        "A unique identifier associated with the user whose preferences you wish to retrieve.",
    },
    {
      type: "string",
      name: "topic_id",
      required: true,
      example: "FW0YU64P4TMYKMMHH67D6FENX8VS",
      description:
        "A unique identifier associated with a subscription topic.",
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
            name: "topic",
            description: "The Preferences associated with the user_id for a particular subscription topic.",
            ...SubscriptionTopic
          },
        ],
      },
    },
    {
      status: 404,
      description: "Not Found",
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
