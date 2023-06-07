import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../../../reference/configs/schemas/Paging";
import SubscriptionTopic from "../schemas/subscription-topic";

const config: ApiReferenceProps = {
  description: "Fetch all user preferences.",
  method: "GET",
  path: "/users/:user_id/preferences",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      example: "example_user_id",
      description:
        "A unique identifier associated with the user whose preferences you wish to retrieve.",
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
            ...Paging,
            name: "paging",
          },
          {
            type: "array",
            name: "items",
            description: "The Preferences associated with the user_id.",
            field: SubscriptionTopic
          },
        ],
      },
    },
  ],
};

export default config;
