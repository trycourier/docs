import { ApiParam } from "@site/src/components/ApiReference";

import PreferenceType from "./PreferenceType";
import Notification from "./Notification";

const Category: ApiParam = {
  type: "object",
  displayName: "Category",
  fields: [
    {
      type: "string",
      name: "id",
      description: "A unique identifier for the category.",
    },
    {
      type: "string",
      name: "title",
      description: "The title of the category.",
    },
    {
      type: "object",
      name: "config",
      fields: [{ ...PreferenceType, name: "type" }],
    },
    {
      type: "array",
      name: "notifications",
      description: "A list of notifications included in the category.",
      field: Notification,
    },
  ],
};

export default Category;
