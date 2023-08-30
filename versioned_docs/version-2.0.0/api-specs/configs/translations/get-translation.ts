import { ApiReferenceProps } from "@site/src/components/ApiReference";
import TranslationsGet from "../schemas/TranslationsGet";

const config: ApiReferenceProps = {
  description: "Get a translation",
  method: "GET",
  path: "/translations/:domain/:locale",
  pathParams: [
    {
      type: "string",
      name: "domain",
      required: true,
      description:
        "The domain you want to retrieve translations for. Only `default` is supported at the moment",
      example: "default",
    },
    {
      type: "string",
      name: "locale",
      required: true,
      description: "The locale you want to retrieve the translations for",
      example: "en_US",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: TranslationsGet,
    },
    {
      status: 404,
      description: "Not Found",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Not Found",
          },
          {
            type: "string",
            name: "type",
            description: "The type of error that occurred.",
            enum: ["invalid_request_error"],
            example: "invalid_request_error",
          },
        ],
      },
    },
  ],
};

export default config;
