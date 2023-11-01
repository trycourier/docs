import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./tagsList.module.css";

type PropType = {
  tags: string[];
  handleTagsSelection: (tag: string) => void;
  selectedTags: string[];
};

// function normalizeString(input: string): string {
//   // Replace spaces with hyphens
//   const stringWithHyphens = input.replace(/\s+/g, "-");

//   // Use regular expression to break camelCase and separate numbers
//   const normalizedString = stringWithHyphens.replace(
//     /([a-z])([A-Z])|([A-Z])([A-Z][a-z])|(\d+)/g,
//     function (match, p1, p2, p3, p4, p5) {
//       if (p1) return p1.toLowerCase() + "-" + p2.toLowerCase();
//       if (p3) return p3.toLowerCase() + "-" + p4.toLowerCase();
//       if (p5) return "-" + p5 + "-";
//     }
//   );

//   // Replace consecutive hyphens with a single hyphen and remove any leading or trailing hyphens
//   const finalNormalizedString = normalizedString.replace(/-+/g, "-").replace(/^-+|-+$/g, "");

//   // Convert the entire string to lowercase
//   return finalNormalizedString.toLowerCase();
// }
const TagsList = ({ tags = [], handleTagsSelection, selectedTags }: PropType) => {
  if (!tags.length) return null;
  return (
    <div role="group" aria-labelledby="tags-group-label">
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
