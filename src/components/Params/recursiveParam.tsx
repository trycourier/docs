import React from "react";
import { Params, Param, ChildParams } from "@site/src/components/Params";

function RecursiveParam({ data }) {
  const { name, type, description, children } = data;

  return (
    <Param type={type} name={name}>
      {description}
      {children && (
        <ChildParams name={name}>
          {children.map((child, index) => (
            <Params key={index}>
              <RecursiveParam data={child} />
            </Params>
          ))}
        </ChildParams>
      )}
    </Param>
  );
}

export const JsonToParamsComponent = ({ jsonData }) => {
  return (
    <Params>
      {jsonData.map((data, index) => (
        <RecursiveParam key={index} data={data} />
      ))}
    </Params>
  );
};
