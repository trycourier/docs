import React from "react";
import { Params, Param, ChildParams } from "@site/src/components/Params";
import { ToProfile } from "./profile";
import Markdown from "markdown-to-jsx";

export const Message = () => (
  <Params>
    <Param name="to" type="Profile | array<Profile>" required>
      The recipient or a list of recipients of the message
      <ChildParams name="profile object">
        <ToProfile />
      </ChildParams>
    </Param>
    <Param name="template" type="string">
      The id of the notification template to be rendered and sent to the recipient(s). This field or
      the content field must be supplied.
    </Param>
    <Param name="content" type="Content">
      Describes the content of the message in a way that will work for email, push, chat, or any
      channel. Either this or template must be specified.
      <ChildParams name="content object">
        <Content />
      </ChildParams>
    </Param>
    <Param name="data" type="object">
      An arbitrary object that includes any data you want to pass to the message. The data will
      populate the corresponding template or elements variables.
    </Param>
  </Params>
);

/** Does not include user_id */
export const Content = () => (
  <Params>
    <Param name="title" type="string">
      The title to be displayed by channels that support a title, such as email.
    </Param>
    <Param name="body" type="string">
      Text content displayed in the notification. Supports markdown.
    </Param>
    <Param name="elements" type="array">
      Elements describing the content of the notification. Use this field or body. 
      See <a href="/docs/platform/content/elemental/elements">elements</a> for a list of available 
      elements.
    </Param>
    <Param name="version" type="string">
      The version of elemental being supplied. Currently, only `2020-01-01` is supported.
    </Param>
  </Params>
);

export const AdvancedMessageProperties = () => (
  <Params>
    <Param name="brand_id" type="string">
      Id of the brand that should be used for rendering the message. If not specified, the brand
      configured as default brand will be used.
    </Param>
    <Param name="channels" type="{ [channel: ChannelId]: ChannelConfig }">
      <Markdown>
        Define run-time configuration for one or more `channels`. If you don't specify channels, the
        default configuration for each channel will be used. Valid `ChannelId`'s are: `email`,
        `sms`, `push`, `inbox`, `direct_message`, `banner`, and `webhook`.
      </Markdown>
      <ChildParams name="channel config object">
        <ChannelConfig />
      </ChildParams>
    </Param>
    <Param name="delay" type="Delay">
      Defines the time to wait before delivering the message.
      <ChildParams name="delay object">
        <Delay />
      </ChildParams>
    </Param>
    <Param name="metadata" type="Metadata">
      Metadata such as utm tracking attached with the notification.
      <ChildParams name="metadata object">
        <Metadata />
      </ChildParams>
    </Param>
    <Param name="expiry" type="Expiry">
      Expiry allows you to set an absolute or relative time in which a message expires. Note: This
      is only valid for the Courier Inbox channel as of 12-08-2022.
      <ChildParams name="expiry object">
        <Expiry />
      </ChildParams>
    </Param>
    <Param name="preferences" type="MessagePreferences">
      Configuration related to this notification and user preferences. Primary used to set the
      subscription_topic associated with this message
      <ChildParams name="preferences object">
        <Param name="subscription_topic" type="string">
          The id of the subscription topic whose preferences you wish to respect.
        </Param>
      </ChildParams>
    </Param>
    <Param name="providers" type="{ [provider: ProviderId]: ProviderConfig }">
      The providers object is a map of valid provider identifiers (e.g. twilio, slack, etc.) to
      provider configuration objects. If you don't specify providers, Courier will use the default
      configuration for each provider.
      <ChildParams name="provider config object">
        <ProviderConfig />
      </ChildParams>
    </Param>
    <Param name="routing" type="Routing">
      Allows you to customize which channel(s) Courier will potentially deliver the message. If no
      routing key is specified, Courier will use the default routing configuration or routing
      defined by the template.
      <ChildParams name="routing object">
        <Routing />
      </ChildParams>
    </Param>
    <Param name="timeout" type="Timeout">
      In the event of a retryable error, this field defines the amount of time courier should
      attempt to deliver the message and/or failover to another provider or channel
      <ChildParams name="timeout object">
        <Timeout />
      </ChildParams>
    </Param>
  </Params>
);

export const ChannelConfig = () => (
  <Params>
    <Param name="brand_id" type="string">
      Specify the ID of the Brand which will apply to all messages sent through this channel.
    </Param>
    <Param name="if" type="string">
      A JavaScript conditional expression to determine if the message should be sent through the
      channel. Has access to the <code>data</code> and <code>profile</code> object. Ex. `data.name
      === profile.name`
    </Param>
    <Param name="providers" type="array<string>">
      A list of providers enabled for this channel. Courier will select one provider to send through
      unless <code>routing_method</code> is set to all.
    </Param>
    <Param name="routing_method" type="string">
      <Markdown>
        The method for selecting the providers to send the message with. Valid values are `single`
        or `all`. Single will send to one of the available providers for this channel, all will send
        the message through all channels. Defaults to `single`.
      </Markdown>
    </Param>
    <Param name="override" type="object">
      Channel specific overrides.
    </Param>
    <Param name="metadata" type="Metadata">
      Metadata such as utm tracking attached with the notification through this channel.
      <ChildParams name="metadata object">
        <Metadata />
      </ChildParams>
    </Param>
    <Param name="timeout" type="string">
      Time in ms to attempt the channel before failing over to the next available channel.
      <strong>Business Tier</strong>
    </Param>
  </Params>
);

export const ProviderConfig = () => (
  <Params>
    <Param name="if" type="string">
      A JavaScript conditional expression to determine if the message should be sent through the
      channel. Has access to the <code>data</code> and <code>profile</code> object. Ex. `data.name
      === profile.name`
    </Param>
    <Param name="override" type="object">
      Provider specific overrides.
    </Param>
    <Param name="metadata" type={<a href="#metadata">Metadata</a>}>
      Metadata such as utm tracking attached with the notification through this provider.
    </Param>
    <Param name="timeout" type="string">
      Time in ms to attempt the provider before failing over to the next available channel.
      <strong>Business Tier</strong>
    </Param>
  </Params>
);

export const Metadata = () => (
  <Params>
    <Param name="event" type="string">
      An arbitrary string to tracks the event that generated this request (e.g. 'signup').
    </Param>
    <Param name="tags" type="array<string>">
      An array of up to 9 tags you wish to associate with this request (and corresponding messages)
      for later analysis. Individual tags cannot be more than 30 characters in length.
    </Param>
    <Param name="trace_id" type="string">
      A unique ID used to correlate this request to processing on your servers. Note: Courier does
      not verify the uniqueness of this ID.
    </Param>
    <Param name="utm" type="Utm">
      Identify the campaign that refers traffic to a specific website, and attributes the browser's
      website session.
      <ChildParams name="utm fields">
        <Utm />
      </ChildParams>
    </Param>
  </Params>
);

export const Utm = () => (
  <Params>
    <Param name="campaign" type="string" collapsed />
    <Param name="content" type="string" collapsed />
    <Param name="medium" type="string" collapsed />
    <Param name="source" type="string" collapsed />
    <Param name="term" type="string" collapsed />
  </Params>
);

export const Delay = () => (
  <Params>
    <Param name="duration" type="number">
      The duration of the delay in milliseconds.
    </Param>
  </Params>
);

export const Expiry = () => (
  <Params>
    <Param name="expires_at" type="string">
      An epoch timestamp or ISO8601 timestamp with timezone (YYYY-MM-DDThh:mm:ss.sTZD) that
      describes the time in which a message expires.
    </Param>
    <Param name="expires_in" type="string | number">
      A duration in the form of milliseconds or an ISO8601 Duration format (i.e. P1DT4H). 
    </Param>
  </Params>
);

export const Routing = () => (
  <Params>
    <Param name="method" type="string" required>
      Can be <code>single</code> or <code>all</code>
    </Param>
    <Param name="channels" type="array<string | Routing>" required>
      A list of channels or providers to send the message through. Can also recursively define
      sub-routing methods, which can be useful for defining advanced push notification delivery
      strategies.
    </Param>
  </Params>
);

export const Timeout = () => (
  <Params>
    <Param name="message" type="number">
      The time in milliseconds for Courier to continue retrying message delivery. Defaults to 72
      hours (259200000 Milliseconds)
    </Param>
    <Param name="channel" type="number">
      Time in ms to attempt a channel before failover.
      <strong>Business tier</strong>
    </Param>
    <Param name="provider" type="number">
      Time in ms to attempt a provider before failover.
      <strong>Business tier</strong>
    </Param>
  </Params>
);
