import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../schemas/Paging";
import PartialMessage from "../schemas/PartialMessage";

const config: ApiReferenceProps = {
  description: "Fetch the statuses of messages you've previously sent.",
  method: "GET",
  path: "/messages",
  queryParams: [
    {
      type: "boolean",
      name: "archived",
      description: "A boolean value that indicates whether archived messages should be included in the response.",
      example: "false",
    },
    {
      type: "string",
      name: "cursor",
      description: "A unique identifier that allows for fetching the next set of message statuses.",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA==",
    },
    {
      type: "string",
      name: "event",
      description: "A unique identifier representing the event that was used to send the event.",
      example: "welcome-message",
    },
    {
      type: "string",
      name: "list",
      description: "A unique identifier representing the list the message was sent to.",
      example: "event-change",
    },
    {
      type: "string",
      name: "messageId",
      description:
        "A unique identifier representing the `message_id` returned from either /send or /send/list.",
      example: "1-5fa64f03-2a3d64b92a1f1a061ab4c3c3",
    },
    {
      type: "string",
      name: "notification",
      description:
        "A unique identifier representing the notification that was used to send the event.",
      example: "1-5fa64f03-2a3d64b92a1f1a061ab4c3c3",
    },
    {
      type: "string",
      name: "recipient",
      description:
        "A unique identifier representing the recipient associated with the requested profile.",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
    },
    {
      type: "string",
      name: "status",
      description:
        "An indicator of the current status of the message. Multiple status values can be passed in.",
      example: "OPENED",
    },
    {
      type: "string",
      name: "tags",
      description:
        "A comma delimited list of 'tags' associated with a message",
      example: "tag-1,tag-2",
    }
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            ...Paging,
            name: "paging",
          },
          {
            type: "array",
            description: "An array of Messages",
            field: PartialMessage,
          },
        ],
      },
    },
  ],
};

export default config;
