import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../schemas/Paging";
import AuditEvent from "../schemas/AuditEvent";

const config: ApiReferenceProps = {
  description: "Fetch the list of audit events",
  method: "GET",
  path: "/audit-events",
  queryParams: [
    {
      type: "string",
      name: "cursor",
      description: "A unique identifier that allows for fetching the next set of audit events.",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA==",
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
            description: "An array of Audit Events",
            field: AuditEvent,
            name: "results",
          },
        ],
      },
    },
  ],
};

export default config;
