import React, { useEffect, useState } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import TagsList from "./TagsList";
import styles from "./tutorialsWithFilter.module.css";
import { CardList } from "@site/src/components/CardList";
import { Card } from "../Card";

type DataType = { slug: string; title: string; type: string[]; product: string[]; tags: string[] };

const TutorialsTags = () => {
  const {
    allData = [],
    types = [],
    products = [],
    allTags = [],
  } = usePluginData("tutorial-filters") as {
    types: string[];
    allData: DataType[];
    products: string[];
    allTags: string[];
  };

  const [selectedData, setSelectedData] = useState<DataType[]>(allData);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTagsSelection = (tag: string) => {
    let nextTags = [...selectedTypes];
    if (selectedTypes.includes(tag)) {
      nextTags = selectedTypes.filter((prevTag) => prevTag !== tag);
    } else {
      nextTags.push(tag);
    }
    setSelectedTypes(nextTags);
  };

  useEffect(() => {
    if (selectedTypes.length === 0) {
      setSelectedData(allData);
      return;
    }
    const filteredData = allData.filter(
      (item) =>
        item?.type?.some((type) => selectedTypes.includes(type)) ||
        item?.product?.some((product) => selectedTypes.includes(product)) ||
        item?.tags?.some((tag) => selectedTypes.includes(tag))
    );
    setSelectedData(filteredData);
  }, [selectedTypes, allData]);

  return (
    <div className={styles.container}>
      <div className={styles.tagsContainer}>
        <TagsList
          tags={types}
          handleTagsSelection={handleTagsSelection}
          selectedTags={selectedTypes}
          title="Type"
        />
        <TagsList
          tags={products}
          handleTagsSelection={handleTagsSelection}
          selectedTags={selectedTypes}
          title="Product"
        />
        <TagsList
          tags={allTags}
          handleTagsSelection={handleTagsSelection}
          selectedTags={selectedTypes}
          title="Tag"
        />
      </div>

      <div className={styles.cardsContainer}>
        <CardList size="small">
          {selectedData.map((data) => (
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
