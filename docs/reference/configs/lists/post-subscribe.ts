import { ApiReferenceProps } from "@site/src/components/ApiReference";

import putConfig from "./put-subscribe";

const config: ApiReferenceProps = {
  ...putConfig,
  description:
    "Subscribes additional recipients to the list (note: if the list does not exist, it will be automatically created).",
  method: "POST",
};

export default config;
