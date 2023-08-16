import React from "react";

import { FieldComponentProps } from "./ApiParamField";
import ApiParamField from "./ApiParamField";

import { ChildParams, Param, Params } from "../Params";
import Markdown from "markdown-to-jsx";

const ApiParamObjectField = ({ param, field, isRoot }: FieldComponentProps<"object">) => {
  if (isRoot) {
    return (
      <Params>
        {param.fields?.map((fieldParam, index) => (
          <ApiParamField key={index} param={fieldParam} prefix={field.name} />
        ))}
      </Params>
    );
  }
  return (
    <Param name={param.name} type={param.type}>
      {param.description && <Markdown>{param.description}</Markdown>}
      <ChildParams name="Properties">
        {param.fields?.map((fieldParam, index) => (
          <ApiParamField key={index} param={fieldParam} prefix={field.name} />
        ))}
      </ChildParams>
    </Param>
  );
};
// if (field.type === "object") {
//   if (isRoot) {
//     return (
//       <>
//         {field.fields?.map((arrayField, index) => (
//           <ApiResponseField key={index} field={arrayField} collapsible />
//         ))}
//       </>
//     );
//   }
//   return (
//     <Param name={field.name} type={field.type}>
//       {field.description && <Markdown>{field.description}</Markdown>}
//       {collapsible && (
//         <ChildParams name="Properties">
//           {field.fields?.map((arrayField, index) => (
//             <ApiResponseField key={index} field={arrayField} collapsible />
//           ))}
//         </ChildParams>
//       )}
//       {!collapsible && (
//         <Params>
//           {field.fields?.map((arrayField, index) => (
//             <ApiResponseField key={index} field={arrayField} collapsible />
//           ))}
//         </Params>
//       )}
//     </Param>
//   );
// }

export default ApiParamObjectField;
