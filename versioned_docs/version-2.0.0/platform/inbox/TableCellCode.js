import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export const TableCellCode = ({ value, language }) => (
  <td style={{ width: "99%" }}>
    <CodeBlock 
      className={`language-${language}`} 
      style={{ whiteSpace: "pre" }} 
      language={language ?? "jsx"}
    >
      {value.trim()}
    </CodeBlock>
  </td>
);