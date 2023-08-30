import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageHistoryProfileLoadedItem: ApiParam = {
  type: "object",
  displayName: "MessageHistoryProfileLoadedItem",
  fields: [
    {
      type: "json",
      name: "merged_profile",
      description: "The profile merged while sending the message",
      example: {},
    },
    {
      type: "json",
      name: "received_profile",
      description: "The profile received while sending the message",
      example: {},
    },
    {
      type: "json",
      name: "stored_profile",
      description: "The profile stored while sending the message",
      example: {},
    },
    {
      type: "number",
      name: "ts",
      example: 1562611083411,
      description:
        "A UTC timestamp at which the profile of message recipient was loaded. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "type",
      enum: ["PROFILE_LOADED"],
      example: "PROFILE_LOADED",
    },
  ],
};

export default MessageHistoryProfileLoadedItem;
