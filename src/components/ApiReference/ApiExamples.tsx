import React, { useMemo, useContext } from "react";
import { useFormikContext } from "formik";
import capitalize from "lodash/capitalize";
import mapValues from "lodash/mapValues";
import omitBy from "lodash/omitBy";
import isPlainObject from "lodash/isPlainObject";
import qs from "qs";
import { Path } from "path-parser";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import { ApiReferenceProps, FormValues } from ".";
import { ApiReferenceTokenContext } from "./ApiReferenceToken";

const INDENT_LENGTH = 2;
const STORAGE_EXAMPLE_TAB_KEY = "API_REFERENCE_EXAMPLE_TAB";

const escapeChar = (str: string, char: string) =>
  str.replace(new RegExp(`(?:\\\\)?(${char})`, "g"), "\\$1");

const buildTemplate = (lines: Array<string | null>) =>
  lines.filter((line) => line != null).join("\n");

const line = (str: string, indent: number = 0) => `${" ".repeat(indent * INDENT_LENGTH)}${str}`;

export const stringifyJSON = (obj: object, pretty: boolean = false) =>
  JSON.stringify(obj, null, pretty ? INDENT_LENGTH : undefined);

const tabs = [
  {
    lang: "bash",
    title: "cURL",
    template: ({ method, url, auth, body }) => {
      const indent = " ".repeat("curl ".length);

      return buildTemplate([
        line(`curl --request ${method} \\`),
        line(`${indent}--url ${url} \\`),
        line(`${indent}--header 'Accept: application/json' ${body || auth ? "\\" : ""}`),
        auth ? line(`${indent}--header 'Authorization: Bearer ${auth}' ${body ? "\\" : ""}`) : null,
        body ? line(`${indent}--header 'Content-Type: application/json' \\`) : null,
        body ? line(`${indent}--data '`) : null,
        body ? line(stringifyJSON(body, true)) : null,
        body ? line("'") : null,
      ]);
    },
  },
  {
    lang: "js",
    title: "Node.js",
    template: ({ method, url, auth, body }) =>
      buildTemplate([
        line("// Dependencies to install:"),
        line("// $ npm install node-fetch --save"),
        line(""),
        line("const fetch = require('node-fetch');"),
        line(""),
        line("const options = {"),
        line(`method: '${method}',`, 1),
        line("headers: {", 1),
        line(`Accept: 'application/json'${auth || body ? "," : ""}`, 2),
        body ? line(`'Content-Type': 'application/json'${auth ? "," : ""}`, 2) : null,
        auth ? line(`Authorization: 'Bearer ${auth}'`, 2) : null,
        line("},", 1),
        body
          ? line(`body: JSON.stringify(${stringifyJSON(body, true)})`, 1).replace(
              /\n/g,
              `\n${" ".repeat(INDENT_LENGTH)}`
            )
          : null,
        line("};"),
        line(""),
        line(`fetch('${url}', options)`),
        line(".then(response => response.json())", 1),
        line(".then(response => console.log(response))", 1),
        line(".catch(err => console.error(err));", 1),
      ]),
  },
  {
    lang: "ruby",
    title: "Ruby",
    template: ({ method, url, auth, body }) =>
      buildTemplate([
        line("require 'uri'"),
        line("require 'net/http'"),
        line("require 'openssl'"),
        line(""),
        line(`url = URI("${url}")`),
        line(""),
        line("http = Net::HTTP.new(url.host, url.port)"),
        line("http.use_ssl = true"),
        line(""),
        line(`request = Net::HTTP::${capitalize(method)}.new(url)`),
        line(`request["Accept"] = 'application/json'`),
        body ? line(`request["Content-Type"] = 'application/json'`) : null,
        auth ? line(`request["Authorization"] = 'Bearer ${auth}'`) : null,
        body ? line(`request.body = "${escapeChar(stringifyJSON(body), '"')}"`) : null,
        line(""),
        line("response = http.request(request)"),
        line("puts response.read_body"),
      ]),
  },
  {
    lang: "python",
    title: "Python",
    template: ({ method, url, auth, body }) =>
      buildTemplate([
        line("# Dependencies to install:"),
        line("# $ python -m pip install requests"),
        line(""),
        line("import requests"),
        line(""),
        line(`url = "${url}"`),
        line(""),
        body ? line(`payload = ${stringifyJSON(body, true)}`) : null,
        line("headers = {"),
        line(`"Accept": "application/json"${auth || body ? "," : ""}`, 1),
        body ? line(`"Content-Type": "application/json"${auth ? "," : ""}`, 1) : null,
        auth ? line(`"Authorization": "Bearer ${auth}"`, 1) : null,
        line(`}`),
        line(""),
        line(
          `response = requests.request("${method}", url, ${
            body ? "json=payload, " : ""
          }headers=headers)`
        ),
        line(""),
        line("print(response.text)"),
      ]),
  },
  {
    lang: "go",
    title: "Go",
    template: ({ method, url, auth, body }) =>
      buildTemplate([
        line("package main"),
        line(""),
        line("import ("),
        line('"fmt"', 1),
        body ? line('"strings"', 1) : null,
        line('"net/http"', 1),
        line('"io/ioutil"', 1),
        line(")"),
        line(""),
        line("func main() {"),
        line(""),
        line(`url := "${url}"`, 1),
        line(""),
        body
          ? line(`payload := strings.NewReader("${escapeChar(stringifyJSON(body), '"')}")`, 1)
          : null,
        body ? line("") : null,
        line(`req, _ := http.NewRequest("${method}", url, payload)`, 1),
        line(""),
        line('req.Header.Add("Accept", "application/json")', 1),
        body ? line('req.Header.Add("Content-Type", "application/json")', 1) : null,
        auth ? line(`req.Header.Add("Authorization", "Bearer ${auth}")`, 1) : null,
        line(""),
        line("res, _ := http.DefaultClient.Do(req)", 1),
        line(""),
        line("defer res.Body.Close()", 1),
        line("body, _ := ioutil.ReadAll(res.Body)", 1),
        line(""),
        line("fmt.Println(res)", 1),
        line("fmt.Println(string(body))", 1),
        line(""),
        line("}"),
      ]),
  },
  {
    lang: "php",
    title: "PHP",
    template: ({ method, url, auth, body }) =>
      buildTemplate([
        line("<?php"),
        line("// Dependencies to install:"),
        line("// $ composer require guzzlehttp/guzzle"),
        line(""),
        line("require_once('vendor/autoload.php');"),
        line(""),
        line("$client = new \\GuzzleHttp\\Client();"),
        line(""),
        line(`$response = $client->request('${method}', '${url}', [`),
        body ? line(`'body' => '${escapeChar(stringifyJSON(body), "'")}',`, 1) : null,
        line("'headers' => [", 1),
        line("'Accept' => 'application/json',", 2),
        auth ? line(`'Authorization' => 'Bearer ${auth}',`, 2) : null,
        body ? line("'Content-Type' => 'application/json',", 2) : null,
        line("],", 1),
        line("]);"),
        line(""),
        line("echo $response->getBody();"),
      ]),
  },
];

// Used to filter out the fields that are empty in the example body JSON
const filterOutEmpty = (value: any) => {
  if (Array.isArray(value)) {
    const cleanArray = value.map((item) => filterOutEmpty(item)).filter((item) => item != null);
    return cleanArray.length === 0 ? undefined : cleanArray;
  }

  if (isPlainObject(value)) {
    const cleanObject = Object.entries(value).reduce((obj, [key, value]) => {
      const cleanValue = filterOutEmpty(value);
      return cleanValue == null ? obj : { ...obj, [key]: cleanValue };
    }, {});

    return Object.keys(cleanObject).length === 0 ? undefined : cleanObject;
  }

  return value;
};

const ApiExamples = ({ method, path }: Pick<ApiReferenceProps, "method" | "path">) => {
  const { values } = useFormikContext<FormValues>();
  const { token } = useContext(ApiReferenceTokenContext);

  const defaultPathParams = useMemo(
    () => mapValues(values.path, (value, key) => `:${key}`),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Tabs groupId={STORAGE_EXAMPLE_TAB_KEY}>
      {tabs.map((tab, index) => (
        <TabItem key={index} value={tab.lang} label={tab.title}>
          <CodeBlock className={`language-${tab.lang}`}>
            {tab.template({
              method,
              url: [
                process.env.API_HOST,
                new Path(path).build({
                  ...defaultPathParams,
                  ...omitBy(values.path, (value) => value == null),
                }),
                qs.stringify(values.query || {}, { addQueryPrefix: true }),
              ].join(""),
              auth: token,
              body: filterOutEmpty(values.body),
            })}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
};

export default ApiExamples;
