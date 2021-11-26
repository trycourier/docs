import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import Preferences from "./Preferences";

const List: ApiParam = {
  type: "object",
  displayName: "List",
  fields: [
    {
      type: "string",
      name: "created",
      example: "2020-06-10T18:41:29.093Z",
      description:
        "The date/time of when the list was created. Represented as a string in ISO format.",
    },
    {
      type: "string",
      name: "id",
      example: "example.list.id",
      description: "List Identifier",
    },
    {
      type: "string",
      name: "name",
      example: "Example List Name",
      description: "List name",
    },
    {
      type: "string",
      name: "updated",
      example: "2020-06-10T18:41:29.093Z",
      description:
        "The date/time of when the list was updated. Represented as a string in ISO format.",
    },
    {
      ...Preferences,
      name: "preferences",
    },
  ],
};

export default List;
