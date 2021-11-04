import { ApiParam } from "@site/src/components/ApiReference";

import MessageProviderStatus from "./MessageProviderStatus";

const MessageProvider: ApiParam = {
  type: "object",
  displayName: "MessageProvider",
  fields: [
    {
      type: "object",
      name: "channel",
      description: "Contains information related to the channel.",
      fields: [
        {
          type: "string",
          name: "key",
          description: "A string that represents an internal identifier of the channel.",
        },
        {
          type: "string",
          name: "name",
          description: "A string that is the user defined label of the channel.",
        },
        {
          type: "string",
          name: "template",
          description: "A unique identifier for the channel.",
        },
      ],
    },
    {
      type: "number",
      name: "sent",
      example: 1562611074138,
      description:
        "A UTC timestamp at which Courier passed the message to the Integration provider. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "number",
      name: "delivered",
      example: 1562611077139,
      description:
        "A UTC timestamp at which the Integration provider delivered the message. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "number",
      name: "clicked",
      example: 1562611084123,
      description:
        "A UTC timestamp at which the recipient clicked on a tracked link for the first time. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "number",
      name: "opened",
      example: 1562611083411,
      description:
        "A UTC timestamp at which the recipient opened a message for the first time. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "error",
      example: "400 Bad Request",
      description: "A message describing the error that occurred.",
    },
    {
      type: "string",
      name: "provider",
      example: "twilio",
      description: "The Integration provider responsible for delivering the message.",
    },
    {
      type: "json",
      name: "reference",
      description:
        "An object that stores the unique identifiers provided by the Integration provider when Courier sends the message.",
    },
    {
      ...MessageProviderStatus,
      name: "status",
    },
  ],
};

export default MessageProvider;
