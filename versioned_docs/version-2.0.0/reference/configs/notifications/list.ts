import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../schemas/Paging";
import NotificationListItem from "../schemas/NotificationListItem";

const config: ApiReferenceProps = {
  description: "",
  method: "GET",
  path: "/notifications",
  queryParams: [
    {
      type: "string",
      name: "cursor",
      description: "A unique identifier that allows for fetching the next set of notifications",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA",
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
            description: "An array of Notifications",
            field: NotificationListItem,
            name: "results",
          },
        ],
      },
    },
  ],
};

export default config;
