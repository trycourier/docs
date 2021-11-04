import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import PartialMessage from "./PartialMessage";
import MessageProvider from "./MessageProvider";

const Message: ApiParam = {
  type: "object",
  displayName: "Message",
  fields: [
    ...(PartialMessage.type === "object" ? PartialMessage.fields : []),
    {
      type: "array",
      name: "providers",
      field: MessageProvider,
    },
  ],
};

export default Message;
