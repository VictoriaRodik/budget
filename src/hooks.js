import { useState } from "react";

export const useBooleanToggle = () => {
  const [status, setStatus] = useState(false);

  const handleStatusChange = () => {
    setStatus((currentStatus) => !currentStatus);
  };

  return {
    status,
    handleStatusChange,
  };
};
