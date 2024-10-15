import {
  InkeepChatButton,
  type InkeepChatButtonProps,
  type InkeepBaseSettings,
} from "@inkeep/uikit";

const baseSettings: InkeepBaseSettings = {
  apiKey: process.env.INKEEP_API_KEY!,
  integrationId: process.env.INKEEP_INTEGRATION_ID!,
  organizationId: process.env.INKEEP_ORGANIZATION_ID!,
  organizationDisplayName: "Inkeep",
  primaryBrandColor: "#3E2A49",
};

const InkeepChatButtonProps: InkeepChatButtonProps = {
  chatButtonType: 'PILL', // default. Alternatives are 'RECTANGLE_SHORTCUT' and 'ICON'
  baseSettings: {
    ...baseSettings,
  },
  modalSettings: {
    // optional typeof InkeepModalSettings
  },
  searchSettings: {
    // optional typeof InkeepSearchSettings
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

export const ChatButton = () => {
  return <InkeepChatButton {...InkeepChatButtonProps} />;
};
