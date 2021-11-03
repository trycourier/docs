import { ApiReferenceProps } from "@site/src/components/ApiReference";

import createConfig from "./create";

const config: ApiReferenceProps = {
  description: "Get the list of brands",
  method: "GET",
  path: "/brands",
  queryParams: [
    {
      type: "string",
      name: "cursor",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA",
      description: "A unique identifier that allows for fetching the next set of brands.",
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
            type: "object",
            name: "paging",
            fields: [
              {
                type: "string",
                name: "cursor",
                example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA==",
                description:
                  "A unique identifier that allows for fetching the next set of objects.",
              },
              {
                type: "boolean",
                name: "more",
                example: true,
                description: "Whether or not there are more message statuses that can be fetched.",
              },
            ],
          },
          {
            type: "array",
            name: "results",
            description: "An array of brands",
            field: createConfig.responses[0].body,
          },
        ],
      },
    },
  ],
};

export default config;
