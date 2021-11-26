import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Event from "../schemas/Event";

const config: ApiReferenceProps = {
  description: "Fetch the list of events",
  method: "GET",
  path: "/events",
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "array",
            name: "results",
            description: "An array of events",
            field: Event,
          },
        ],
      },
    },
  ],
};

export default config;
