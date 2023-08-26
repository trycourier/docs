import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Deletes the specified user profile.",
  method: "DELETE",
  path: "/profiles/:user_id",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      description:
        "A unique identifier representing the user associated with the requested profile.",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "status",
            example: "SUCCESS",
          },
        ],
      },
    },
  ],
};

export default config;
