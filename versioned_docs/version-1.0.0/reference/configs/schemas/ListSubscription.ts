import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import Preferences from "./Preferences";

const ListSubscription: ApiParam = {
  type: "object",
  displayName: "ListSubscription",
  fields: [
    {
      type: "string",
      name: "recipientId",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
      description: "An identifier for the recipient subscribing to the list.",
    },
    {
      type: "string",
      name: "created",
      example: "2020-06-10T18:41:29.093Z",
      description:
        "The date/time of when the list was created. Represented as a string in ISO format.",
    },
    {
      ...Preferences,
      name: "preferences",
    },
  ],
};

export default ListSubscription;
