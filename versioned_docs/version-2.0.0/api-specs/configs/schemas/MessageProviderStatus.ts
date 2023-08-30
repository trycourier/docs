import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageProviderStatus: ApiParam = {
  type: "string",
  displayName: "MessageProviderStatus",
  example: "SENT",
  enum: ["CLICKED", "DELIVERED", "OPENED", "SENT", "UNDELIVERABLE"],
  description: `
Message Provider Status:

* \`CLICKED\` - The recipient has clicked on any link in the message at least one time.
* \`DELIVERED\` - The provider successfully delivered the message to the recipient.
* \`OPENED\` - The recipient has opened the message at least one time.
* \`SENT\` - The message has been accepted by the provider.
* \`UNDELIVERABLE\` - The message could not be delivered to at least one provider, or the provider could not deliver the message to the recipient. This can happen for multiple reasons: an error, insufficient profile data, invalid notification setup, invalid integration configuration, etc.
  `.trim(),
};

export default MessageProviderStatus;
