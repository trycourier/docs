import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../schemas/Paging";
import NotificationListItem from "../schemas/NotificationListItem";

const config: ApiReferenceProps = {
  description: "Returns a list of notification templates",
  method: "GET",
  path: "/notifications",
  queryParams: [
    {
      type: "string",
      name: "cursor",
      description: "A unique identifier that allows for fetching the next set of templates",
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
            description: "An array of Notification Templates",
            field: NotificationListItem,
            name: "results",
          },
        ],
      },
    },
  ],
};

export default config;
