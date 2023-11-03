import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./tagsList.module.css";

type PropType = {
  tags: string[];
  handleTagsSelection: (tag: string) => void;
  selectedTags: string[];
  title?: string;
};

const TagsList = ({ tags = [], handleTagsSelection, selectedTags = [], title }: PropType) => {
  if (!tags.length) return null;
  return (
    <div role="group" aria-labelledby="tags-group-label">
      {title && <h4 className={styles.header}>{title}</h4>}
      <ul className={styles.list}>
        {tags.map((tag) => {
          const isChecked: boolean = selectedTags.includes(tag);
          return (
            <li key={tag} className={styles.listItem}>
              <Checkbox
                value={tag}
                checked={isChecked}
                onChange={(e) => {
                  handleTagsSelection(e.target.value);
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

export default TagsList;
