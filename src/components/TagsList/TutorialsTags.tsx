import React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import TagsList from "./TagsList";
import Link from "@docusaurus/Link";

const TutorialsTags = () => {
  const { tutorialsTags = [], allData } = usePluginData("my-plugin") as {
    tutorialsTags: string[];
    allData: { slug: string; title: string; tags: string[] }[];
  };

  // todo: implement filtering
  console.log("allData", allData);

  return (
    <>
      <TagsList tags={tutorialsTags} />
      <ul>
        {allData.map((data) => (
          <li key={data.slug}>
            <Link href={`./${data.slug}`}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TutorialsTags;
