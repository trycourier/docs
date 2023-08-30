import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageHistoryUnroutableItem: ApiParam = {
  type: "object",
  displayName: "MessageHistoryUnroutableItem",
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
          example: "ae25b99c-3d05-4f26-8108-f91d5d0fe8c9",
        },
      ],
    },
    {
      type: "string",
      name: "reason",
      description: "The reason for message being unroutable",
    },
    {
      type: "number",
      name: "ts",
      example: 1644482783377,
      description:
        "A UTC timestamp at which the message was determined to be unroutable. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "type",
      enum: ["UNROUTABLE"],
      example: "UNROUTABLE",
    },
  ],
};

export default MessageHistoryUnroutableItem;
