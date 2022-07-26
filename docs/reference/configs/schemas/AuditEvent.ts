import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const AuditEvent: ApiParam = {
  type: "object",
  displayName: "AuditEvent",
  fields: [
    {
      type: "string",
      name: "auditEventId",
      description: "A unique identifier associated with the audit event you wish to retrieve",
      example: "ZX3xXUMNKL4y2NkiKgstl",
    },
    {
      type: "object",
      name: "actor",
      fields: [
        {
          type: "string",
          name: "id",
          description: "A unique user identifier associated with the audit event actor.",
          example: "foo-user",
        },
        {
          type: "string",
          name: "email",
          description: "The email asscoiated with the actor of the audit event.",
          example: "joe.fake@gmail.com",
        },
      ],
    },
    {
      type: "object",
      name: "target",
      fields: [
        {
          type: "string",
          name: "id",
          description: "A unique user identifier associated with the audit event target.",
          example: "EF607F6E84A34305AE98B6TR",
        },
        {
          type: "string",
          name: "email",
          description: "The email asscoiated with the target of the audit event.",
          example: "jane.doe@gmail.com",
        },
      ],
    },
    {
      type: "string",
      name: "source",
      description: "A unique identifier representing the source of the audit event.",
      example: "courier.studio",
    },
    {
      type: "string",
      name: "timestamp",
      description: "A UTC timestamp at which the audit event was triggered.",
      example: "2022-07-05T22:30:24.662Z",
    },
    {
      type: "string",
      name: "type",
      description: "The type of audit event that was triggered.",
      example: "user:role-changed",
    },
  ],
};

export default AuditEvent;
