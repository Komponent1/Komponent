import { useEffect, useState } from 'react';

const useFetch = (api, callback, init) => {
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async () => {
    try {
      const response = await fetch(api);
      if (response.ok) setData(response.json());
      else {
        throw new Error('something wrong');
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(async () => {
    if (!init || loading) return;
    
    setLoading(true);
    await request();
    setLoading(false);
  }, []);

  useEffect(() => {
    if (data === null) return;
    callback(data);
  }, [ data ]);

  return [loading, data, request];
};

export default useFetch;
