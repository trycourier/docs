import React, { FC, useState, useContext, createContext } from "react";
import styles from "./params.module.css";

/** Will return true when params are children */
export const ChildContext = createContext(false);

export const Params: FC = ({ children }) => {
  const isChild = useContext(ChildContext);

  if (isChild) return <>{children}</>;

  return <ParamsList>{children}</ParamsList>;
};

export const ExtendParams: FC = ({ children }) => (
  <ChildContext.Provider value={true}>
    <Params>{children}</Params>
  </ChildContext.Provider>
);

export const ExpandButton = ({ onClick, label }: { onClick: () => void; label: string }) => {
  return (
    <div className={styles.showChildParamsButton} onClick={onClick}>
      {label}
    </div>
  );
};

export const ChildParams: FC<{ name?: string }> = ({ children, name = "child parameters" }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  const childParameters = (
    <div className={styles.childParams}>
      <ParamsList>
        <span className={styles.hideChildParamsButton} onClick={toggleCollapsed}>
          - Hide {name}
        </span>
        <ChildContext.Provider value={true}>{children}</ChildContext.Provider>
      </ParamsList>
    </div>
  );

  return isCollapsed ? (
    <ExpandButton onClick={toggleCollapsed} label={`+ Show ${name}`} />
  ) : (
    childParameters
  );
};

export const ParamsList: FC = ({ children }) => <div className={styles.params}>{children}</div>;
