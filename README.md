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
