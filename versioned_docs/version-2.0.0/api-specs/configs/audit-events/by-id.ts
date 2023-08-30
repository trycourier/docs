import { ApiReferenceProps } from "@site/src/components/ApiReference";

import AuditEvent from "../schemas/AuditEvent";

const config: ApiReferenceProps = {
  description: "Fetch a specific audit event by ID.",
  method: "GET",
  path: "/audit-events/:audit-event-id",
  pathParams: [
    {
      type: "string",
      name: "audit-event-id",
      required: true,
      description: "A unique identifier associated with the audit event you wish to retrieve",
      example: "ZX3xXUMNKL4y2NkiKgstl",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: AuditEvent,
    },
  ],
};

export default config;
