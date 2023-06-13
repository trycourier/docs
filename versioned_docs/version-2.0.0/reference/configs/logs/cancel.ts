import { ApiReferenceProps } from "@site/src/components/ApiReference";
import Message from "../schemas/Message";

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
