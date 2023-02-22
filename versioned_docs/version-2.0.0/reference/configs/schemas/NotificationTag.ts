import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const NotificationTag: ApiParam = {
  type: "object",
  name: "tags",
  displayName: "NotificationTag",
  fields: [
    {
      type: "string",
      name: "id",
      example: "", // TODO
      description: "A unique identifier of the tag.",
    },
  ],
};

export default NotificationTag;
