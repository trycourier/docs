import { ApiReferenceProps } from "@site/src/components/ApiReference";
import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";
import PartialMessage from "../schemas/PartialMessage";
import MessageStatus from "../schemas/MessageStatus";

/**
 * {
event: string, // event id of the notification
id: string, // the message id
status: string, // the message status
recipient: string, // the recipient email or id

// optional
  canceledAt: number, // the milli second timestamp of the successful cancellation request
	clicked: number, // the milli-second timestamp of the clicked event
  delivered: number // the milli-second timestamp of the deleivered event
  enqueued: number, // the milli-second timestamp of the enqueued event
  error: string, // the error message
  jobId: string, // the bulk job id
  listId: string, // the list id of the list
  listMessageId: string, // the request id from the sucessful list send request
  notification: string, // the notification id
  opened: number, // the milli-second timestamp of the opened event
  runId: string, // the automation run id
  sent: number // the milli-second timestamp of the sent event
}
 */

const Message: ApiParam = {
  type: "object",
  displayName: "Message",
  fields: [
    {
      type: "string",
      name: "event",
      example: "TAFGNB3GNQ4MZVHW4WV4R8Q8ZVN4",
      description: "A unique identifier associated with the message.",
    },
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
      type: "string",
      name: "recipient",
      example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
      description: "A unique identifier associated with the message recipient.",
    },
    {
      type: "number",
      name: "canceledAt",
      description:
        "A UTC timestamp at which Courier received the cancel request. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
      required: true,
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
      name: "delivered",
      example: 1562611077139,
      description:
        "A UTC timestamp at which the Integration provider delivered the message. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "number",
      name: "enqueued",
      example: 1562611073426,
      description:
        "A UTC timestamp at which Courier received the message request. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "error",
      example: "400 Bad Request",
      description: "A message describing the error that occurred.",
    },
    {
      type: "string",
      name: "jobId",
      description: "A unique identifier associated with the processing of a bulk send job.",
      required: true,
    },
    {
      type: "string",
      name: "listId",
      description: "A unique identifier associated with the Courier List entity.",
    },
    {
      type: "string",
      name: "listMessageId",
      description: "A unique identifier associated with the request id from a list send request.",
    },
    {
      type: "string",
      name: "notification",
      example: "TAFGNB3GNQ4MZVHW4WV4R8Q8ZVN4",
      description: "A unique identifier associated with the notification of the delivered message.",
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
      name: "runId",
      description: "A unique identifier associated with the automation run.",
      example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
    },
    {
      type: "number",
      name: "sent",
      example: 1562611074138,
      description:
        "A UTC timestamp at which Courier passed the message to the Integration provider. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
  ],
};

const config: ApiReferenceProps = {
  description:
    "Cancel a message that is currently in the process of being delivered. A well-formatted API call to the cancel message API will return either `200` status code for a successful cancellation or `409` status code for an unsuccessful cancellation. Both cases will include the actual `message` record in the response body (see details below).",
  method: "POST",
  path: "/messages/:message_id/cancel",
  pathParams: [
    {
      type: "string",
      name: "message_id",
      required: true,
      description: "A unique identifier representing the message ID",
      example: "1-61e9dd53-b5bb6c863b7ffbe83ad4b28d",
    },
  ],
  responses: [
    {
      status: 200,
      description: "SUCCESS",
      body: Message,
    },
    {
      status: 409,
      description: "FAILURE",
      body: Message,
    },
  ],
};

export default config;
