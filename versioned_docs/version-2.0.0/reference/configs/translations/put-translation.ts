import { ApiReferenceProps } from "@site/src/components/ApiReference";
import TranslationsGet from "../schemas/TranslationsGet";

const config: ApiReferenceProps = {
  description: "Update a translation",
  method: "PUT",
  path: "/translations/:domain/:locale",
  pathParams: [
    {
      type: "string",
      name: "domain",
      required: true,
      description:
        "The domain you want to update translations for. Only `default` is supported at the moment",
      example: "default",
    },
    {
      type: "string",
      name: "locale",
      required: true,
      description: "The locale you want to upload the translations for",
      example: "en_US",
    },
  ],
  bodyParam: {
    description: ".po file translation content",
    type: "string",
    example:
      'msgid ""\nmsgstr ""\n"Language: en\\n"\n"MIME-Version: 1.0\\n"\n"Content-Type: text/plain; charset=UTF-8\\n"\n"Content-Transfer-Encoding: 8bit\\n"\n"Plural-Forms: nplurals=2; plural=(n != 1);\\n"\n\nmsgid "Salutation"\nmsgstr "Welcome, %s"',
  },
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
