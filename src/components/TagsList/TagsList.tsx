import React from "react";
import Tag from "@theme/Tag";
import styles from "./tagsList.module.css";

type PropType = {
  tags?: string[];
};

function normalizeString(input: string): string {
  // Replace spaces with hyphens
  const stringWithHyphens = input.replace(/\s+/g, "-");

  // Use regular expression to break camelCase and separate numbers
  const normalizedString = stringWithHyphens.replace(
    /([a-z])([A-Z])|([A-Z])([A-Z][a-z])|(\d+)/g,
    function (match, p1, p2, p3, p4, p5) {
      if (p1) return p1.toLowerCase() + "-" + p2.toLowerCase();
      if (p3) return p3.toLowerCase() + "-" + p4.toLowerCase();
      if (p5) return "-" + p5 + "-";
    }
  );

  // Replace consecutive hyphens with a single hyphen and remove any leading or trailing hyphens
  const finalNormalizedString = normalizedString.replace(/-+/g, "-").replace(/^-+|-+$/g, "");

  // Convert the entire string to lowercase
  return finalNormalizedString.toLowerCase();
}
const TagsList = ({ tags = [] }: PropType) => {
  if (!tags.length) return null;
  return (
    <div className={styles.container}>
      <b>Tags:</b>
      <ul className={styles.ul}>
        {tags.map((tag) => (
          <li key={tag} className={styles.li}>
            <Tag permalink={`/tags/${normalizeString(tag)}`} label={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsList;
