import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const TranslationsGet: ApiParam = {
  type: "object",
  displayName: "Translations Get",
  fields: [
    {
      type: "json",
      name: "translation",
      description: "The translation json",
      example: {
        app: "default",
        createdAt: "2023-05-16T16:40:26.008Z",
        locale: "en_US",
        po: "po string",
        status: "PUBLISHED",
        version: "2023-05-16T16:40:26.008Z",
        updatedAt: "2023-05-16T16:40:26.008Z",
        json: {
          charset: "utf-8",
          headers: {
            Language: "en",
            "MIME-Version": "1.0",
            "Content-Type": "text/plain; charset=UTF-8",
            "Content-Transfer-Encoding": "8bit",
            "Plural-Forms": "nplurals=2; plural=(n != 1);",
          },
          translations: {
            "": {
              "": {
                msgid: "",
                msgstr: [
                  "Language: en\nMIME-Version: 1.0\nContent-Type: text/plain; charset=UTF-8\nContent-Transfer-Encoding: 8bit\nPlural-Forms: nplurals=2; plural=(n != 1);\n",
                ],
              },
              Salutation: {
                msgid: "Salutation",
                msgstr: ["Welcome, %s"],
              },
            },
          },
        },
      },
    },
  ],
};

export default TranslationsGet;
