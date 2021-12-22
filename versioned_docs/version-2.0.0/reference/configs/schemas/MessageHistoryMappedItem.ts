import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageHistoryMappedItem: ApiParam = {
  type: "object",
  displayName: "MessageHistoryMappedItem",
  fields: [
    {
      type: "string",
      name: "event_id",
      description: "The event ID used while sending the message",
      example: "<Event>",
    },
    {
      type: "string",
      name: "notification_id",
      description: "The notification ID used while sending the message",
      example: "<Notification ID>",
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
      enum: ["MAPPED"],
      example: "MAPPED",
    },
  ],
};

export default MessageHistoryMappedItem;
