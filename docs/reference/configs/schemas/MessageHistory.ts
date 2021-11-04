import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import MessageHistoryType from "./MessageHistoryType";

const MessageHistory: ApiParam = {
  type: "object",
  displayName: "MessageHistory",
  fields: [
    {
      type: "number",
      name: "ts",
      example: 1562611083411,
      description:
        "A UTC timestamp at which the recipient opened a message for the first time. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      ...MessageHistoryType,
      name: "type",
    },
  ],
};

export default MessageHistory;
