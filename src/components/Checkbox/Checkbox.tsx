import React from "react";
import styles from "./checkbox.module.css";

type PropType = {
  children: React.ReactNode;
  value: string | number;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = ({ children: label, checked, value, onChange }: PropType) => {
  return (
    <label tabIndex={0} className={styles.container}>
      <input
        type="checkbox"
        aria-checked={checked.toString() as "true" | "false"}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
