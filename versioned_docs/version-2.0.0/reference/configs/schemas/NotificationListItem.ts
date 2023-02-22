import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";
import NotificationTag from "./NotificationTag";
import { routing } from "./Send";

const NotificationListItem: ApiParam = {
  type: "object",
  displayName: "NotificationListItem",
  fields: [
    {
      type: "number",
      name: "created_at",
      example: 1562611084123,
      description:
        "A UTC timestamp at which notification was created. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "id",
      example: "P852PP8Z2X4BZ8PYVA6853A53NDY",
      description: "A unique identifier associated with the notification.",
    },
    {
      ...routing,
      description: "Routing strategy used by this notification.",
    },
    {
      type: "object",
      name: "tags",
      description: "A list of tags attached to the notification.",
      fields: [
        {
          type: "array",
          field: NotificationTag,
        },
      ],
    },
    {
      type: "string",
      name: "title",
      example: "Password Reset",
      description: "The title of the notification.",
    },
    {
      type: "number",
      name: "updated_at",
      example: 1562611084123,
      description:
        "A UTC timestamp at which notification was updated. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
  ],
};

export default NotificationListItem;
