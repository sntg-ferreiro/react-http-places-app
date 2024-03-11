import { useEffect, useState } from "react";

export default function useFetch(fetchFunction, initialDataValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [dataFetched, setDataFetched] = useState(initialDataValue);
  const [updateError, setUpdateError] = useState();

  useEffect(() => {
    setIsFetching(true);
    async function fetchAndWait() {
      try {
        const data = await fetchFunction();
        setDataFetched(data);
      } catch (error) {
        setDataFetched([]);
        setUpdateError({ message: error.message || "Failed to fetch!" });
      }
      setIsFetching(false);
    }

    fetchAndWait();
  }, [fetchFunction]);

  return {
    isFetching,
    dataFetched,
    setDataFetched,
    updateError,
    setUpdateError,
  };
}
