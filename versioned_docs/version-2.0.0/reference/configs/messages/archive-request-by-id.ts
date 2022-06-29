import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Archive request",
  method: "PUT",
  path: "/requests/:request_id/archive",
  pathParams: [
    {
      type: "string",
      name: "request_id",
      required: true,
      description: "A unique identifier representing the request ID",
      example: "1-61e9dd53-b5bb6c863b7ffbe83ad4b28d",
    },
  ],
  responses: [
    {
      status: 202,
      description: "ACCEPTED",
    },
  ],
};

export default config;
