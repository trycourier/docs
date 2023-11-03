import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./filterOptionsList.module.css";

type PropType = {
  filterOptions: string[];
  handleFilterSelection: (tag: string) => void;
  selectedTags: string[];
  title?: string;
};

const FilterOptionsList = ({
  filterOptions = [],
  handleFilterSelection,
  selectedTags = [],
  title,
}: PropType) => {
  if (!filterOptions.length) return null;
  return (
    <div role="group" aria-labelledby="tags-group-label">
      {title && <h4 className={styles.header}>{title}</h4>}
      <ul className={styles.list}>
        {filterOptions.map((tag) => {
          const isChecked: boolean = selectedTags.includes(tag);
          return (
            <li key={tag} className={styles.listItem}>
              <Checkbox
                value={tag}
                checked={isChecked}
                onChange={(e) => {
                  handleFilterSelection(e.target.value);
                }}
              >
                {tag}
              </Checkbox>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterOptionsList;
