import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const NotificationTag: ApiParam = {
  type: "object",
  fields: [
    {
      type: "string",
      name: "id",
      example: "Important",
      description: "A unique identifier of the tag.",
    },
    {
      type: "string",
      name: "name",
      example: "Important",
      description: "Name of the tag.",
    },
  ],
};

export default NotificationTag;
