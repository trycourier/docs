import React, { FC, useState, useContext, createContext } from "react";
import styles from "./params.module.css";

/** Will return true when params are children */
export const ChildContext = createContext(false);

export type ParamsProps = { name?: string };

export const Params: FC<ParamsProps> = ({ children }) => {
  const isChild = useContext(ChildContext);

  if (isChild) return <>{children}</>;

  return <ParamsList>{children}</ParamsList>;
};

export const ChildParams: FC<ParamsProps> = ({ children, name = "parameters" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  const showButton = (
    <div className={styles.showChildParamsButton} onClick={toggleCollapsed}>
      + Show child {name}
    </div>
  );

  const childParameters = (
    <div className={styles.childParams}>
      <ParamsList>
        <span className={styles.hideChildParamsButton} onClick={toggleCollapsed}>
          - Hide child {name}
        </span>
        <ChildContext.Provider value={true}>{children}</ChildContext.Provider>
      </ParamsList>
    </div>
  );

  return isCollapsed ? showButton : childParameters;
};

const ParamsList: FC = ({ children }) => <div className={styles.params}>{children}</div>;
