import { ApiParam } from "@site/src/components/ApiReference";

import PreferenceType from "./PreferenceType";

const Notification: ApiParam = {
  type: "object",
  displayName: "Notification",
  fields: [
    {
      type: "string",
      name: "id",
      description: "The unique identifier for the notification.",
    },
    {
      type: "string",
      name: "title",
      description: "The title of the notification.",
    },
    {
      type: "object",
      name: "config",
      fields: [{ ...PreferenceType, name: "type" }],
    },
  ],
};

export default Notification;
