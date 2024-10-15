import {
    InkeepSearchBar,
    type InkeepSearchBarProps,
    type InkeepBaseSettings,
  } from "@inkeep/uikit";
import { baseSettings } from "../ChatButton/index"
  
  const searchBarProps: InkeepSearchBarProps = {
    baseSettings: {
      ...baseSettings,
      theme: {
        // stylesheetUrls: ['/path/to/stylesheets'], // optional
      },
    },
    modalSettings: {
      // optional InkeepModalSettings
    },
    searchSettings: {
      // optional InkeepSearchSettings
    },
    aiChatSettings: {
        chatSubjectName: "Courier",
            botAvatarSrcUrl: "https://framerusercontent.com/images/UaLJKrAmvdMARtdLOIVEDfj5vuQ.svg",
            getHelpCallToActions: [
                {
                    name: "GitHub",
                    url: "https://github.com/trycourier",
                    icon: {
                        builtIn: "FaGithub"
                    }
                },
                {
                    name: "Discord",
                    url: "https://discord.gg/wWGecZgs4k",
                    icon: {
                        builtIn: "FaDiscord"
                    }
                }
            ],
            quickQuestions: [
                "How to create and send an email notification?",
                "How to setup a template approval workflow?",
                "Inserting data with variables?",
                "Set up a webhook destination?"
            ]
      },
  };
  
  export const SearchBar = () => {
    return <InkeepSearchBar {...searchBarProps} />;
  };
  