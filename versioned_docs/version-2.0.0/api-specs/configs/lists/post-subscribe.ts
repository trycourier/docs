import { ApiReferenceProps } from "@site/src/components/ApiReference";

import putConfig from "./put-subscribe";

const config: ApiReferenceProps = {
  ...putConfig,
  description:
    "Subscribes additional users to the list, without modifying existing subscriptions. If the list does not exist, it will be automatically created.",
  method: "POST",
};

export default config;
