import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Deletes the specified recipient Profile.",
  method: "DELETE",
  path: "/audiences/:audience_id",
  pathParams: [
    {
      type: "string",
      name: "audience_id",
      required: true,
      description: "A unique identifier representing the audience you want to delete.",
      example: "my-favorite-developer-audience",
    },
  ],
  responses: [
    {
      status: 204,
      description: "No Content",
    },
  ],
};

export default config;
