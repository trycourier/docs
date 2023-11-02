import React, { useEffect, useState } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import TagsList from "./TagsList";
import styles from "./tutorialsTags.module.css";
import { CardList } from "@site/src/components/CardList";
import { Card } from "../Card";

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
      <div className={styles.cardsContainer}>
        <CardList size="small">
          {selectedTagsData.map((data) => (
            <Card
              key={data.slug}
              title={data.title}
              href={`./${data.slug}`}
              linkText="Learn More"
            />
          ))}
        </CardList>
      </div>
    </div>
  );
};

export default TutorialsTags;
