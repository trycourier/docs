import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../schemas/Paging";
import { BrandResponse } from "../schemas/Brand";

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
            ...Paging,
            name: "paging",
          },
          {
            type: "array",
            name: "results",
            description: "An array of brands",
            field: BrandResponse,
          },
        ],
      },
    },
  ],
};

export default config;
