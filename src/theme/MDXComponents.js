// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import * as ParamsModules from "@site/src/components/Params";
import Button from "../components/Button";

const modules = {
  ...MDXComponents,
  ...ParamsModules,
  Button,
};

export default modules;
