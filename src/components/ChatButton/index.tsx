// ChatButton/index.tsx
import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { baseSettings, aiChatSettings } from './inkeepConfig';

const ChatButtonContent = () => {
  const InkeepChatButton = require('@inkeep/uikit').InkeepChatButton;
  const InkeepChatButtonProps = {
    chatButtonType: 'PILL',
    baseSettings,
    aiChatSettings,
  };
  return <InkeepChatButton {...InkeepChatButtonProps} />;
};

export const ChatButton = () => (
  <BrowserOnly fallback={<div>Loading...</div>}>
    {() => <ChatButtonContent />}
  </BrowserOnly>
);