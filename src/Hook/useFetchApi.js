import * as React from 'react';

export const useFetchApi = ({ url, dependencies }) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();

      if ((data.errors && data.errors.length > 0) || data.error) {
        setIsError(true);
      } else {
        setData(fetchedData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, dependencies ? dependencies:[]);

  return {
    data,
    setData,
    isLoading,
    isError
  };
};
