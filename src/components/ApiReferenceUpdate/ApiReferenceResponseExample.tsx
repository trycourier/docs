import React from "react";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";
import { ApiReferenceProps } from ".";
import { stringifyJSON } from "./ApiExamples";
import { buildResponse } from "./ApiResponseField";

type PropType = NonNullable<Pick<ApiReferenceProps, "responses">>;

const deepCompact = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.map(deepCompact).filter((x) => x !== null).length === 0 ? undefined : value;
  }

  if (typeof value === "object" && value !== null) {
    const object = Object.fromEntries(
      Object.entries(value)
        .map(([key, value]) => [key, deepCompact(value)])
        .filter(([key, value]) => value !== null)
    );

    return Object.keys(object).length === 0 ? undefined : object;
  }

  return value;
};

const ApiReferenceResponseExample = ({ responses }: PropType) => {
  const renderResponseBody = (idx: number) => {
    if (responses.length === 0) {
      return "Error with Test Request";
    }
    const currentResponse = responses[idx];

    if (currentResponse.body) {
      const responseBody = deepCompact(buildResponse(currentResponse.body));
      return responseBody ? stringifyJSON(responseBody, true) : "Empty";
    }
    return "Empty";
  };

  return (
    <div className={styles.section}>
      <div className={styles.inlineForm}>
        <div className={styles.sectionTitle}>Responses Example</div>
      </div>
      {responses.map((_response, idx) => (
        <CodeBlock className="language-json">{renderResponseBody(idx)}</CodeBlock>
      ))}
    </div>
  );
};

export default ApiReferenceResponseExample;
