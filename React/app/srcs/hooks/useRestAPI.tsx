import { useState, useEffect, useCallback } from 'react';

type tObject = {
  [key in string]: string | number
};

const query2url = (query: tObject) => {
  if (!query || Object.keys(query).length === 0) return '';
  
  return Object.keys(query).map(([key, value]) => `${key}=${value}`).join('&');
};
const useApi = (url: string, method: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);

  const fetcher = useCallback(async (query: tObject, option: RequestInit) => {
    const res = await fetch(url + query2url(query), {
      method, ...option
    });
    if (Math.floor(res.status / 100) !== 2) throw 'Err';

    return await res.json();
  }, []);
  const request = useCallback(async (query: tObject, option: RequestInit) => {
    setLoading(true);
    try {
      const data = await fetcher(query, option);
      setData(data);
    } catch(err) {
      setErr(err);
    }
  }, [ fetcher ]);

  useEffect(() => {
    if (data) setLoading(false);
  }, [ data ]);
  useEffect(() => {
    if (err) setLoading(false);
  }, [ err ]);

  return { loading, err, data, request };
};

const useApiNoResponse = (url: string, method: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<number>(0);
  const [err, setErr] = useState(null);

  const fetcher = useCallback(async (query: tObject, option: RequestInit) => {
    const res = await fetch(url + query2url(query), {
      method, ...option
    });

    if (Math.floor(res.status / 200) !== 2) throw 'Err';
    return res.status;
  }, []);
  const request = useCallback(async (query: tObject, option: RequestInit) => {
    setLoading(false);
    try {
      const sucucess = await fetcher(query, option);
      setCode(sucucess);
    } catch (err) {
      setErr(err);
    }
  }, [ fetcher ]);
  useEffect(() => {
    if (code !== 0) setLoading(false);
  }, [ code ]);
  useEffect(() => {
    if (err) setLoading(false);
  }, [ err ]);

  return { loading, err, request };
};

export { useApi, useApiNoResponse };
