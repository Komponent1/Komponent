import { useEffect, useState } from 'react';

export function useFetch<DataType>(
  fetcher: (...args: any[]) => Promise<any>,
  arg: any[],
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!loading) return;
    fetcher(...arg)
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, [loading]);
  useEffect(() => {
    if (data || error) setLoading(false);
  }, [data, error]);

  const onFetch = (type: 'basic' | 'refresh' = 'basic') => {
    if (type === 'refresh') setData(null);
    setError(null);
    setLoading(true);
  };

  return {
    loading,
    data,
    error,
    onFetch,
  };
}
