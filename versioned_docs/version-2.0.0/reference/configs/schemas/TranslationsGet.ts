import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const TranslationsGet: ApiParam = {
  type: "string",
  description: ".po file translation content",
  example:
    'msgid ""\nmsgstr ""\n"Language: en\\n"\n"MIME-Version: 1.0\\n"\n"Content-Type: text/plain; charset=UTF-8\\n"\n"Content-Transfer-Encoding: 8bit\\n"\n"Plural-Forms: nplurals=2; plural=(n != 1);\\n"\n\nmsgid "Salutation"\nmsgstr "Welcome, %s"',
};

export default TranslationsGet;
