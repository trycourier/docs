import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import MessageStatus from "./MessageStatus";

const PartialMessage: ApiParam = {
  type: "object",
  displayName: "PartialMessage",
  fields: [
    {
      type: "string",
      name: "id",
      example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
      description:
        "A unique identifier associated with the message you wish to retrieve (results from a send).",
    },
    {
      ...MessageStatus,
      name: "status",
    },
    {
      type: "number",
      name: "enqueued",
      example: 1562611073426,
      description:
        "A UTC timestamp at which Courier received the message request. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
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
      name: "opened",
      example: 1562611083411,
      description:
        "A UTC timestamp at which the recipient opened a message for the first time. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "number",
      name: "clicked",
      example: 1562611084123,
      description:
        "A UTC timestamp at which the recipient clicked on a tracked link for the first time. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "recipient",
      example: "CC607F6E84A34305AE98B72C",
      description: "A unique identifier associated with the recipient of the delivered message.",
    },
    {
      type: "string",
      name: "event",
      example: "my-event",
      description: "A unique identifier associated with the event of the delivered message.",
    },
    {
      type: "string",
      name: "notification",
      example: "TAFGNB3GNQ4MZVHW4WV4R8Q8ZVN4",
      description: "A unique identifier associated with the notification of the delivered message.",
    },
    {
      type: "string",
      name: "error",
      example: "400 Bad Request",
      description: "A message describing the error that occurred.",
    },
    {
      type: "string",
      name: "reason",
      example: "UNSUBSCRIBED",
      enum: [
        "FILTERED",
        "NO_CHANNELS",
        "NO_PROVIDERS",
        "OPT_IN_REQUIRED",
        "PROVIDER_ERROR",
        "UNPUBLISHED",
        "UNSUBSCRIBED",
      ],
      description: `
Reason:

* \`FILTERED\` - The recipient did not receive the notification because of a condition that passed.
* \`NO_CHANNELS\` - The notification did contain any valid channels.
* \`NO_PROVIDERS\` - The notification did not contain a configured provider for a channel.
* \`PROVIDER_ERROR\`- The Integration provider had an error when sending a notification.
* \`UNPUBLISHED\` - The notification hasn't been published yet.
* \`UNSUBSCRIBED\` - The recipient did not receive the notification because they chose to unsubscribe from it.
      `.trim(),
    },
  ],
};

export default PartialMessage;
