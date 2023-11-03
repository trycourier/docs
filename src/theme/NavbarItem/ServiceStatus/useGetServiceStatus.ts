import { useEffect, useState } from "react";

const SERVICE_STATUS_API = "https://status.courier.com/api/v2/status.json";
type StatusType = "none" | "minor" | "major" | "maintenance";

type StatusData = { indicator: StatusType; description: string };

type StatusResponse = {
  status: StatusData;
};

const getServiceStatusAsync = () =>
  fetch(SERVICE_STATUS_API).then((res) => res.json()) as Promise<StatusResponse>;

export const useGetServiceStatus = () => {
  const [statusData, setStatusData] = useState<StatusData | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getServiceStatusAsync()
      .then((res) => {
        setStatusData(res.status);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, statusData };
};
