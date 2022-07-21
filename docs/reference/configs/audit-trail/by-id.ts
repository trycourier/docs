import { ApiReferenceProps } from "@site/src/components/ApiReference";

import AuditEvent from "../schemas/AuditEvent";

const config: ApiReferenceProps = {
  description: "Fetch a specific audit event from the Audit Trail by event ID.",
  method: "GET",
  path: "/audit-events/:audit-event-id",
  pathParams: [
    {
        type: "string",
        name: "audit-event-id",
        required: true,
        description: "A unique identifier associated with the audit event you wish to retrieve from the Audit Trail.",
        example: "aQR39rKBuYlFZDAEgE3_M",
    },
  ],
  responses: [
    {
        status: 200,
        description: "OK",
        body: AuditEvent,
    }
  ],
};

export default config;
