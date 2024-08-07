---
sidebar_position: 7
---

import Image from "@theme/IdealImage";

# Digesting a Send API

:::note
Digests were first introduced in automations [docs](../automations/digest.mdx) and may still be used for more complicated use cases. For simple use cases, this document also gives examples of using the /send API to aggregate messages into Digests based on the user's preference. You would use one or the other for a [Subscription Topic](https://www.courier.com/docs/platform/preferences/#subscription-topics)

It is available for our business and enterprise customers and requires contacting [Courier Support](mailto:support@courier.com)](mailto:support@courier.com) or your account team for access.
:::
This feature aimed to make digests straightforward to configure and implement for our customers without requiring code changes when moving from a frequent transactional message to an aggregated message based on a schedule.

## Configure a digest in preferences

The first step is configuring a digest with at least one schedule in the [Preferences Editor](https://app.courier.com/settings/preferences). In the Preferences Editor, either create a new subscription topic or open the settings of an existing one.

### Linked Notifications

While editing a Subscription Topic, you should link all the templates you would want to be digested if a user selects a digest. For example, if you have notifications for social engagements in your application (likes, comments, etc.), you can link each corresponding notification template. Then, in the Settings section, you must select the Linked Digest Template.

### Linked Digest Template

The Linked Digest Template, found in a Subscription Topic's Digest Settings, is the template you would use for aggregated notifications in the digest. By selecting this template, you are opting to use this feature. In the social engagements example above, you might have a template that displays many likes and comments you have aggregated and a few of the most recent examples. When a user has a digest schedule selected, the Linked Digest Template will be the one that is triggered if the user has aggregated notifications.

:::info
Removing the Linked Digest Template will stop digested notifications from being sent. However, messages to the original template will be sent to users who have selected a digest. Aggregated messages won't be removed until a schedule is triggered.
:::

### Schedules

In the digest section, click on schedules. Schedules are user-selected release preferences; we recommend an instant schedule as the default for a digest send to allow users to opt into a digest. One schedule is required. If you have numerous schedules configured, these will show on the hosted preferences page as options for the user to select. Note: the date-time picker is currently configured in the local timezone. Users viewing our hosted preference page or using our front-end preference components will also see their local timezone.

<Image img={require("../automations/assets/digest-schedules.png")} alt="Digest Schedules" />

### Categories

Categories provides the ability to separate disparate data within the same digest. For example, you may want to sort by likes and comments for a weekly digest of the blog posts with the most engagement. Each category has a `retain` setting. This describes the specific events that will be retained when the digest is released. 10 highest/10 lowest require a sort_key which is a data attribute in the event we will use to sort the events by.

<Image img={require("../automations/assets/digest-categories.png")} alt="Digest Categories" />

- first 10: the first 10 events that come in
- last 10: the last 10 events that come in
- 10 highest: The 10 highest events sorted by a specific data attribute
- 10 lowest: The 10 lowest events sorted by a specific data attribute
  The default value is `digest` and will retain the first 10 items.
  When the digest is released, it will be sent with the following format:

```json
[category_key]: {
  count: <total number of events>
  items: [...] // the individual events that match the retain setting. Maximum length of 10
}
```

### Settings

Settings have a toggle to invoke the digest when empty for users within an audience. Typically, the digest will only be sent to users with events during the schedule window. This option means that users in the audience will have a digest sent to them even if no events match their user_id. This can be useful for fetching your data in the automation and sending the digest to your users with that custom data

<Image img={require("../automations/assets/digest-settings.png")} alt="Digest Settings" />

# Testing the Digest Send

In this example, there are two template aliases `like` and `comment`, a third template `social_digest`, and a "Social" Subscription Topic.

<!-- prettier-ignore-start -->
export const CodeBlock = ({json}) => <code className="whiteText">{JSON.stringify(json, null, 2)}</code>
export const send1 = {
    message: {
        to: {
            user_id: "user1"
        }
    },
    template_id: "like"
}
export const send2 = {
    message: {
        to: {
            user_id: "user1"
        }
    },
    template_id: "comment"
}

<!-- prettier-ignore-end -->

Like /send body
<CodeBlock json={send1} />

Comment /send body
<CodeBlock json={send1} />

- Link Like and Comment templates to the Social Subscription Topic
- Open the Social Subscript Topic and choose Social Digest as the Linked Template
- Turn on digests and create an Instant schedule (default) and another schedule (e.g., Daily at 9am)
- Send a message to Like; you should see a successful message in the logs
- Send a message to Comment; you should see a successful message in the logs
- Using the API or a [Preference Tester](https://bwebs.github.io/courier-test/window-preferences.html) change `user1` preference from Instant to the schedule you created above
- Send a message to Like; you should see a `DIGESTED` message in the logs
- Wait until the scheduled time and see the Social Digest template being sent.

# When to use automations

Digesting can be implemented through the Send API and the Automation Invoke API. Generally, most use cases can be solved using this feature without Automations; however, the following list of items may move you into the automations invocation instead.

- Digests will only have profile data from the first send, and the current profile will be stored in the courier. If you need more up-to-date information from your backend, you might consider using a Fetch Data step in an automation
- Conditional logic for sending to other templates
- Changing the routing mechanism based on the data payload
  Gathering up-to-date data with a fetch data step

# Logging

A new status `DIGESTED` will appear in the log when a user has a Subscription Topic schedule set that's not `Instant` and the Digest settings have the Linked Digest Template selected. Upon triggering a digest via the schedule, a new message log will show the Linked Digest Template and all the collected items associated with the digest.
