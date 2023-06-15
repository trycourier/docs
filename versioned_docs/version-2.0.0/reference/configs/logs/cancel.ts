import { ApiReferenceProps } from "@site/src/components/ApiReference";
import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";
import PartialMessage from "../schemas/PartialMessage";

/**
 * {
event: string, // event id of the notification
id: string, // the message id
status: string, // the message status
recipient: string, // the recipient email or id

// optional
  canceledAt: number, // the milli second timestamp of the successful cancelation request
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
    ...(PartialMessage.type === "object" ? PartialMessage.fields : []),

    {
      type: "number",
      name: "canceledAt",
      description:
        "A UTC timestamp at which Courier received the cancel request. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
      required: true,
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
      name: "runId",
      description: "A unique identifier associated with the automation run.",
      example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
    },
  ],
};

const config: ApiReferenceProps = {
  description: "Cancel message",
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
