import { ApiParam } from "@site/src/components/ApiReference";

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
    },
    {
      type: "string",
      name: "type",
      description: "The type of event",
      enum: ["notification"],
    },
  ],
};

export default Event;
