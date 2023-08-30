import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Event: ApiParam = {
  type: "object",
  displayName: "Event",
  fields: [
    {
      type: "string",
      name: "event",
      description: "A unique event identifier",
    },
    {
      type: "string",
      name: "id",
      description: "The ID of the notification this event maps to",
      example: "notification-id-1",
    },
    {
      type: "string",
      name: "type",
      description: "The type of event",
      enum: ["notification"],
      example: "notification",
    },
  ],
};

export default Event;
