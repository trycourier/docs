import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const NotificationTag: ApiParam = {
  type: "object",
  fields: [
    {
      type: "string",
      name: "id",
      example: "59a96dd5-7c76-4ba0-a3bb-06f5d92334d2",
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
