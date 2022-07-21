import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const AuditEvent: ApiParam = {
  type: "object",
  displayName: "AuditEvent",
  fields: [
    {
        type: "string",
        name: "auditEventId",
        description: "A unique identifier associated with the audit event you wish to retrieve from the Audit Trail.",
        example: "1-5e2b2615-05efbb3acab9172f88dd3f6f"
    },
    {
        type: "object",
        name: "actor",
        fields: [
            {
                type: "string",
                name: "id",
                description: "A unique identifier associated with the actor of the audit event.",
                example: "CC607F6E84A34305AE98B72C"
            },
            {
                type: "string",
                name: "email",
                description: "The email asscoiated with the actor of the audit event.",
                example: "joe.fake@gmail.com"
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
                description: "A unique identifier associated with the target of the audit event.",
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
        example: "courier.studio"
    },
    {
        type: "string",
        name: "timestamp",
        description: "A UTC timestamp at which the audit event was triggered.",
        example: "2022-07-05T22:30:24.662Z"
    },
    {
        type: "string",
        name: "type",
        description: "The type of audit event that was triggered.",
        example: "user:role-changed"
    },
    {
        type: "string",
        name: "workspaceId",
        description: "A unique identifier associated with the Audit Trail's workspace.",
        example: "876a5b62-1d7c-494f-9a32-d40a39a8e29e"
    },
  ],
};

export default AuditEvent;