import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Preferences from "../schemas/Preferences";

const config: ApiReferenceProps = {
  description:
    "Subscribe a user to an existing list (note: if the List does not exist, it will be automatically created).",
  method: "PUT",
  path: "/lists/:list_id/subscriptions/:user_id",
  pathParams: [
    {
      type: "string",
      name: "list_id",
      required: true,
      description: "A unique identifier associated with the list you wish to retrieve.",
      example: "example.list.id",
    },
    {
      type: "string",
      name: "user_id",
      required: true,
      description: "A unique identifier representing the recipient associated with the list",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
    },
  ],
  bodyParam: {
    ...Preferences,
    name: "preferences",
  },
  responses: [
    {
      status: 204,
      description: "Successfully created",
    },
  ],
};

export default config;
