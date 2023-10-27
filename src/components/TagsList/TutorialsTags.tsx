import React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import TagsList from "./TagsList";

const TutorialsTags = () => {
  const { tutorialsTags = [] } = usePluginData("my-plugin") as { tutorialsTags: string[] };

  return <TagsList tags={tutorialsTags} />;
};

export default TutorialsTags;
