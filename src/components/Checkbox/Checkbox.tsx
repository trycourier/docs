import React from "react";

type PropType = {
  children: React.ReactNode;
  value: string | number;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = ({ children: label, checked, value, onChange }: PropType) => {
  return (
    <label tabIndex={0}>
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
