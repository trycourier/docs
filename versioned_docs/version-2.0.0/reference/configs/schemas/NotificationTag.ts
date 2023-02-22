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
  ],
};

export default NotificationTag;
