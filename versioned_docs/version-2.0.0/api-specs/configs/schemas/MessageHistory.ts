import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import MessageHistoryEnqueuedItem from "./MessageHistoryEnqueuedItem";
import MessageHistoryMappedItem from "./MessageHistoryMappedItem";
import MessageHistoryProfileLoadedItem from "./MessageHistoryProfileLoadedItem";
import MessageHistoryRenderedItem from "./MessageHistoryRenderedItem";
import MessageHistoryRoutedItem from "./MessageHistoryRoutedItem";
import MessageHistoryDeliveredItem from "./MessageHistoryDeliveredItem";
import MessageHistoryUndeliverableItem from "./MessageHistoryUndeliverableItem";
import MessageHistoryUnroutableItem from "./MessageHistoryUnroutableItem";

const MessageHistory: ApiParam = {
  type: "oneOf",
  displayName: "MessageHistory",
  options: [
    MessageHistoryEnqueuedItem,
    MessageHistoryMappedItem,
    MessageHistoryProfileLoadedItem,
    MessageHistoryRenderedItem,
    MessageHistoryRoutedItem,
    MessageHistoryDeliveredItem,
    MessageHistoryUndeliverableItem,
    MessageHistoryUnroutableItem,
  ],
};

export default MessageHistory;
