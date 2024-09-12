import React, { FC, useState, useContext, createContext } from "react";
import styles from "./params.module.css";

/** Will return true when params are children */
export const ChildContext = createContext(false);

export const Params: FC<{ children: React.ReactNode }> = ({ children }) => {
  const isChild = useContext(ChildContext);

  if (isChild) return <>{children}</>;

  return <ParamsList>{children}</ParamsList>;
};

export const ExtendParams: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChildContext.Provider value={true}>
    <Params>{children}</Params>
  </ChildContext.Provider>
);

export const ExpandButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.showChildParamsButton} onClick={onClick} role="button">
      {children}
    </div>
  );
};

interface ChildParamsProps {
  name?: string;
  children: React.ReactNode;
}

export const ChildParams: FC<ChildParamsProps> = ({ children, name = "child parameters" }) => {
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
    <ExpandButton onClick={toggleCollapsed}>+ Show {name}</ExpandButton>
  ) : (
    childParameters
  );
};

interface ParamsListProps {
  children: React.ReactNode;
}

export const ParamsList: FC<ParamsListProps> = ({ children }) => <div className={styles.params}>{children}</div>;
