import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const BulkJobGetUsers: ApiParam = {
  type: "object",
  displayName: "Bulk Job Get Users",
  fields: [
    {
      type: "array",
      name: "items",
      description: "The bulk job user data items",
      field: {
        type: "json",
        example: {
          recipient: "jane-001",
          email: "jane@email.com",
          data: {},
          locale: "en_US",
          preferences: {},
        },
        description: "User data for the job",
      },
    },
    {
      type: "object",
      name: "paging",
      description: "The bulk job user data paging info",
      fields: [
        {
          type: "string",
          name: "cursor",
          description: "Pagination cursor to ask for result from a specific point",
          example: "randomcursor",
        },
        {
          type: "boolean",
          name: "more",
          description: "Flag that indicates there are more results",
          example: true,
        },
      ],
    },
  ],
};

export default BulkJobGetUsers;
