import { useContext, useEffect } from 'react';
import Intercept from './httpInterceptor';
import { HttpContext } from './httpProvider';

export function useHttpClient(intercepts: Intercept[]) {
  const { httpClient } = useContext(HttpContext);
  useEffect(() => {
    const rollback = [...httpClient.interceptors];
    httpClient.interceptors = [...httpClient.interceptors, ...intercepts];

    return () => {
      httpClient.interceptors = [...rollback];
    };
  }, []);

  return {
    httpClient,
  };
}
