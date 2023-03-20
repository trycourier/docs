# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
$ yarn run vercel link
```

⚠️ Node version `16` is required

### Running locally

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Writing API Reference Documentations

API Reference component can be embedded into any `.mdx` documentation file, you just need to render a <ApiReference /> component anywhere in the doc you want it to be shown.

It's best to keep the options that are being passed to in a separate `.ts` file so that it's possible to typecheck it with TypeScript. The file can be imported and the props be passed from that file.

### Component Props

> Take a look at the [docs/reference/configs](https://github.com/trycourier/docs/tree/main/docs/reference/configs) folder for usage examples.

- **method**
  - _required_ `enum("GET" | "POST" | "PUT" | "PATCH" | "DELETE")`
  - endpoint HTTP method
- **path**
  - _required_ `string`
  - endpoint path, with leading '/'
- **description**
  - `string`
  - a short description of the endpoint
- **pathParams**
  - `ApiParam[]`
  - an array of `ApiParam`s that are present in the endpoint path. express like syntax is used for path params (e.g. /send/:param)
- **queryParams**
  - `ApiParam[]`
  - an array of `ApiParam`s that will be added to the path search
- **bodyParam**
  - `ApiParam`
  - an `ApiParam` that will be used to construct the request body
- **responses**
  - _required_ `ApiResponse[]`
  - possible responses from the endpoint

### Type Definitions

#### ApiResponse

- **status**
  - _required_ `number`
  - the response HTTP status
- **description**
  - _required_ `string`
  - short description for the response
- **body**
  - `ApiParam`
  - will be used to construct response body structure
  - param `example`s will be used to construct an example JSON response automatically
  - can be omitted if the response has no body

#### ApiParam

##### Base parameters for all types:

- **type**
  - _required_ `enum("string"| "number" | "boolean" | "json" | "array" | "record" | "object" | "oneOf")`
- **name**
  - `string`
- **displayName**
  - `string`
  - field display name that can be used to show a display name for the field in the UI even when the field has no name
- **description**
  - `string`, supports markdown
- **required**
  - `boolean`
  - shows whether the param's value is required in the request

##### Extra parameters for each type:

#### `string`

any string value

- **example**
  - `string`
  - default value for the param to show as an example in request builder, or a value to use to build an example response
- **enum**
  - `string[]`
  - the values for the param are restricted to these enum values only, will show up as a dropdown instead of a free-form text field

#### `number`

any number value, input will be restricted to numbers only

- **example**
  - `number`
  - default value for the param to show as an example in request builder, or a value to use to build an example response

#### `boolean`

will show up as a true/false dropdown

- **example**
  - `boolean`
  - default value for the param to show as an example in request builder, or a value to use to build an example response

#### `json`

any valid json string, a freeform text field with JSON validation

- **example**
  - `json`
  - default value for the param to show as an example in request builder, or a value to use to build an example response

#### `array`

allows to add any number of items of the given `ApiParam` type to an array

- **field**
  - _required_ `ApiParam`
  - the type for array items

#### `record`

allows to add any number of items of the given `ApiParam` type to an object, allowing to provide the object param key for every item

- **field**
  - _required_ `ApiParam`
  - the type for object items

#### `object`

an object with pre-defined parameters

- **fields**
  - _required_ `ApiParam[]`
  - object parameters

#### `oneOf`

gives the user the option to select one of the `ApiParam` types and fill the data for it only

- **options**
  - _required_ `ApiParam[]`
  - all the possible options for the field type
