import { useState, useEffect } from "react";
import { fetchAPI } from "../api/fetchAPI";
export const useHook = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchAPI(url)
      .then((val) => setData(val))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);
  return { isLoading, data, error };
};
