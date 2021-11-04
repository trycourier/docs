import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageHistoryType: ApiParam = {
  type: "string",
  displayName: "MessageHistoryType",
  example: "DELIVERED",
  enum: [
    "CLICKED",
    "DELIVERED",
    "OPENED",
    "SENT",
    "UNDELIVERABLE",
    "ENQUEUED",
    "UNMAPPED",
    "FILTERED",
    "MAPPED",
    "PROFILE_LOADED",
    "RENDERED",
  ],
  description: `
Message History Type:

* \`CLICKED\` - The recipient has clicked on any link in the message at least one time.
* \`DELIVERED\` - The provider successfully delivered the message to the recipient.
* \`ENQUEUED\` - The request has been received to send a message, is waiting in the work queue.
* \`FILTERED\` - The Notification or Event did not get sent because it was filtered by a condition.
* \`MAPPED\` - The Notification has successfully been mapped to an Event.
* \`OPENED\` - The recipient has opened the message at least one time.
* \`PROFILE_LOADED\` - The Profile has successfully been merged between what was received on the Send Endpoint and what was stored.
* \`RENDERED\`- The message has been rendered for one or more providers. Contains pointers to actual rendered content.
* \`SENT\`- The message has been accepted by the provider.
* \`UNDELIVERABLE\` - The message could not be delivered to at least one provider, or the provider could not deliver the message to the recipient. This can happen for multiple reasons: an error, insufficient profile data, invalid notification setup, invalid integration configuration, etc.
* \`UNMAPPED\` - Could not find a corresponding Notification or Event for the messages.
  `.trim(),
};

export default MessageHistoryType;
