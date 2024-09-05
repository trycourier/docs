import React from 'react';
import CodeBlock from "@theme/CodeBlock";

export const TableCellCode = ({ value, language }) => {
    return (
      <td style={{ width: "99%" }}>
        <CodeBlock className={`language-${language}`} style={{ whiteSpace: "pre" }} language={language ?? "jsx"}>
          {value.trim()}
        </CodeBlock>
      </td>
    );
  };