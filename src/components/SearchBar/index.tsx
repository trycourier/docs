// SearchBar/index.tsx
import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { baseSettings, aiChatSettings } from '../ChatButton/inkeepConfig';

const SearchBarContent = () => {
  const InkeepSearchBar = require('@inkeep/uikit').InkeepSearchBar;
  const searchBarProps = {
    baseSettings,
    aiChatSettings,
  };
  return <InkeepSearchBar {...searchBarProps} />;
};

export const SearchBar = () => (
  <BrowserOnly fallback={<div>Loading...</div>}>
    {() => <SearchBarContent />}
  </BrowserOnly>
);