import React from "react";
import { ApiReferenceProps } from ".";
import styles from "./styles.module.css";
import { Params } from "../Params";
import ApiResponseField from "./ApiResponseField";
import Header2 from "../Header2";

type PropType = NonNullable<Pick<ApiReferenceProps, "responses">>;

const ApiReferenceResponses = ({ responses }: PropType) => {
  const responseTitle = responses.length > 1 ? "Responses" : "Response";
  if (responses.length === 0) return null;
  return (
    <div className={styles.section}>
      <Header2>{responseTitle}</Header2>

      {responses.map((response, index) => {
        const name = `${response.status} ${response.description}`;
        return (
          <div key={index} className={styles.section}>
            <p>
              <strong>status: </strong>
              <code>{name}</code>
            </p>
            {response.body && (
              <Params>
                <ApiResponseField
                  collapsible={false}
                  isRoot
                  field={{
                    type: "object",
                    name,
                    ...response.body,
                  }}
                />
              </Params>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ApiReferenceResponses;
