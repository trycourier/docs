// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import * as ParamsModules from "@site/src/components/Params";

const modules = {
  ...MDXComponents,
  ...ParamsModules,
};

export default modules;
