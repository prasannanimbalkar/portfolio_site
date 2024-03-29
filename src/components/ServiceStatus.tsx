import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceStatus: React.FC = () => {
  const [status, setStatus] = useState(0); // Use numerical status code
  const apiServiceStatusURL = import.meta.env.API_SERVICESTATUS_URL || "https://portfolio-mail-8ikm.onrender.com/health";

  // const statusColor = () => {
  //   if (status === 200) {
  //     return "!text-green-500"; // Operational
  //   } else if (status >= 400 && status < 500) {
  //     return "!text-yellow-500"; // Client error (considered downtime or degraded)
  //   } else if (status >= 500) {
  //     return "!text-red-500"; // Server error (degraded)
  //   } else {
  //     return "!text-gray-500"; // Unknown or loading status
  //   }
  // };

  const iconColor = () => {
    if (status === 200) {
      return "bg-green-500";
    } else if (status >= 400 && status < 500) {
      return "bg-yellow-500";
    } else if (status >= 500) {
      return "bg-red-500";
    } else {
      return "bg-gray-500";
    }
  };

  useEffect(() => {
    async function getStatusData() {
      try {
        const response = await axios.get(apiServiceStatusURL);
        setStatus(response.status);
      } catch (error) {
        // Check if the error is an AxiosError and access its response
        if (axios.isAxiosError(error)) {
          setStatus(error.response ? error.response.status : 0);
        } else {
          console.error("An unexpected error occurred:", error);
          setStatus(0); // Fallback status
        }
      }
    }

    getStatusData();
  }, []);

  return (
    <div className="status p-4 rounded-xl flex flex-row items-center">
      <div className="status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4">
        <div
          className={`status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${iconColor()} rounded-[inherit]`}
        ></div>
        <div
          className={`status-icon-wave  w-[inherit] h-[inherit] rounded-[inherit] ${iconColor()} animate-ping`}
        ></div>
      </div>
      <p className={`status-text `}>Mail-Api: {status}</p>
    </div>
  );
};

export default ServiceStatus;
