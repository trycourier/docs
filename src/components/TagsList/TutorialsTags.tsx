import React, { useState } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import TagsList from "./TagsList";
import Link from "@docusaurus/Link";
import styles from "./tutorialsTags.module.css";

const TutorialsTags = () => {
  const { tutorialsTags = [], allData } = usePluginData("my-plugin") as {
    tutorialsTags: string[];
    allData: { slug: string; title: string; tags: string[] }[];
  };

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleTagsSelection = (tag: string) => {
    let nextTags = [...selectedTags];
    if (selectedTags.includes(tag)) {
      nextTags = selectedTags.filter((prevTag) => prevTag !== tag);
    } else {
      nextTags.push(tag);
    }
    setSelectedTags(nextTags);
  };

  // todo: implement filtering
  // console.log("allData", allData);

  return (
    <div className={styles.container}>
      <div className={styles.tagsContainer}>
        <TagsList
          tags={tutorialsTags}
          handleTagsSelection={handleTagsSelection}
          selectedTags={selectedTags}
        />
      </div>
      <ul>
        {allData.map((data) => (
          <li key={data.slug}>
            <div className={styles.listItem}>
              <Link href={`./${data.slug}`}>{data.title}</Link>
              {data?.tags?.length > 0 && (
                <ul className={styles.tagList}>
                  {data.tags.map((tag) => (
                    <li className={styles.tagListItem}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialsTags;
