import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageHistoryEnqueuedItem: ApiParam = {
  type: "object",
  displayName: "MessageHistoryEnqueuedItem",
  fields: [
    {
      type: "json",
      name: "data",
      description: "The data bag used while sending the message",
      example: { name: "Courier" },
    },
    {
      type: "string",
      name: "event",
      description: "The event used while sending the message",
      example: "<Event | Notification ID>",
    },
    {
      type: "json",
      name: "profile",
      description: "The profile bag used while sending the message",
      example: {},
    },
    {
      type: "json",
      name: "override",
      description: "The override bag used while sending the message",
    },
    {
      type: "string",
      name: "recipient",
      description: "The recipient used while sending the message",
      example: "<Recipient ID>",
    },
    {
      type: "number",
      name: "ts",
      example: 1562611083411,
      description:
        "A UTC timestamp at which the message was enqueued. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "type",
      enum: ["ENQUEUED"],
      example: "ENQUEUED",
    },
  ],
};

export default MessageHistoryEnqueuedItem;
