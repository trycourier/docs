import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Paging: ApiParam = {
  type: "object",
  displayName: "Paging",
  fields: [
    {
      type: "string",
      name: "cursor",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA==",
      description: "A unique identifier that allows for fetching the next set of objects.",
    },
    {
      type: "boolean",
      name: "more",
      example: true,
      description: "Whether or not there are more message statuses that can be fetched.",
    },
  ],
};

export default Paging;
