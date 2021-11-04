import { ApiParam } from "@site/src/components/ApiReference";

const EventMapping: ApiParam = {
  type: "object",
  displayName: "EventMapping",
  fields: [
    {
      type: "string",
      name: "id",
      required: true,
      example: "notification-id-1",
      description: "The ID of the notification this event maps to",
    },
    {
      type: "string",
      name: "type",
      required: true,
      example: "notification",
      enum: ["notification"],
    },
  ],
};

export default EventMapping;
