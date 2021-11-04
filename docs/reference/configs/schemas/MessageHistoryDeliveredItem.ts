import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageHistoryDeliveredItem: ApiParam = {
  type: "object",
  displayName: "MessageHistoryDeliveredItem",
  fields: [
    {
      type: "object",
      name: "channel",
      description: "The channel used while sending the message",
      fields: [
        {
          type: "string",
          name: "id",
          description: "The ID of the channel used while sending the message",
          example: "5e95b992-3505-4f66-8808-f91d5d0fe8c9",
        },
      ],
    },
    {
      type: "object",
      name: "integration",
      description: "The integration used while sending the message",
      fields: [
        {
          type: "string",
          name: "id",
          description: "The ID of the integration used while sending the message",
          example: "8431c89d-aff0-484c-914d-36a257ea371f",
        },
        {
          type: "string",
          name: "provider",
          description: "The name of the provider used while sending the message",
          example: "sendgrid",
        },
      ],
    },
    {
      type: "json",
      name: "reference",
      description: "The reference to the delivered message",
    },
    {
      type: "number",
      name: "ts",
      example: 1562611083411,
      description:
        "A UTC timestamp at which the recipient opened a message for the first time. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "type",
      enum: ["DELIVERED"],
      example: "DELIVERED",
    },
  ],
};

export default MessageHistoryDeliveredItem;
