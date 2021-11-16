import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../schemas/Paging";
import List from "../schemas/List";

const config: ApiReferenceProps = {
  description: "Get the list of lists",
  method: "GET",
  path: "/lists",
  queryParams: [
    {
      type: "string",
      name: "cursor",
      description: "A unique identifier that allows for fetching the next set of lists.",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA==",
    },
    {
      type: "string",
      name: "pattern",
      description:
        "A pattern used to filter the list items returned. Pattern types supported: exact match on `list_id` or a pattern of one or more pattern parts. you may replace a part with either: `*` to match all parts in that position, or `**` to signify a wildcard `endsWith` pattern match.",
      example: "exact-list-id OR example.*, example.**, example.*.list",
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
            name: "results",
            field: List,
          },
        ],
      },
    },
  ],
};

export default config;
