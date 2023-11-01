import React, { useEffect, useState } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import TagsList from "./TagsList";
import Link from "@docusaurus/Link";
import styles from "./tutorialsTags.module.css";

type DataType = { slug: string; title: string; tags: string[] };

const TutorialsTags = () => {
  const { tutorialsTags = [], allData } = usePluginData("my-plugin") as {
    tutorialsTags: string[];
    allData: DataType[];
  };

  const [selectedTagsData, setSelectedTagsData] = useState<DataType[]>(allData);

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

  useEffect(() => {
    if (selectedTags.length === 0) {
      setSelectedTagsData(allData);
      return;
    }
    const filteredData = allData.filter((item) =>
      item?.tags?.some((tag) => selectedTags.includes(tag))
    );
    setSelectedTagsData(filteredData);
  }, [selectedTags, allData]);

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
        {selectedTagsData.map((data) => (
          <li key={data.slug}>
            <div className={styles.listItem}>
              <Link href={`./${data.slug}`}>{data.title}</Link>
              {data?.tags?.length > 0 && (
                <ul className={styles.tagList}>
                  {data.tags.map((tag) => (
                    <li className={styles.tagListItem} key={tag}>
                      {tag}
                    </li>
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
