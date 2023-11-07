import React, { useEffect, useState } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import FilterOptionsList from "./FilterOptionsList";
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
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterSelection = (filterOption: string) => {
    let nextFilters = [...selectedFilters];
    if (selectedFilters.includes(filterOption)) {
      nextFilters = selectedFilters.filter((prevFilterOption) => prevFilterOption !== filterOption);
    } else {
      nextFilters.push(filterOption);
    }
    setSelectedFilters(nextFilters);
  };

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setSelectedData(allData);
      return;
    }
    const filteredData = allData.filter(
      (item) =>
        item?.type?.some((type) => selectedFilters.includes(type)) ||
        item?.product?.some((product) => selectedFilters.includes(product)) ||
        item?.tags?.some((tag) => selectedFilters.includes(tag))
    );
    setSelectedData(filteredData);
  }, [selectedFilters, allData]);

  return (
    <div className={styles.container}>
      <div className={styles.tagsContainer}>
        <FilterOptionsList
          filterOptions={types}
          handleFilterSelection={handleFilterSelection}
          selectedTags={selectedFilters}
          title="Type"
        />
        <FilterOptionsList
          filterOptions={products}
          handleFilterSelection={handleFilterSelection}
          selectedTags={selectedFilters}
          title="Product"
        />
        <FilterOptionsList
          filterOptions={allTags}
          handleFilterSelection={handleFilterSelection}
          selectedTags={selectedFilters}
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
