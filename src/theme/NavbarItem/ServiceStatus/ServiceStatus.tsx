import React from "react";
import styles from "./serviceStatus.module.css";
import { useGetServiceStatus } from "./useGetServiceStatus";

const ServiceStatus = () => {
  const { isLoading, statusData } = useGetServiceStatus();
  if (isLoading) return <div className={styles.serviceStatusWrapper}>...</div>;
  if (!statusData) return <></>;
  return (
    <div className={styles.serviceStatusWrapper}>
      <div className={`${styles.indicator} ${styles[`${statusData.indicator}Indicator`]}`} />
      <div className={`${styles[`${statusData.indicator}Description`]}`}>
        {statusData.description}
      </div>
    </div>
  );
};

export default ServiceStatus;
