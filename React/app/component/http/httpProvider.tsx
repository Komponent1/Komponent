import React, {
  createContext, ReactNode, useMemo,
} from 'react';
import HttpClient from './httpClient';
import Interceptor from './httpInterceptor';

type HttpContextType = {
  httpClient: HttpClient;
};
type HttpProviderProps = {
  /** ReactNode */
  children: ReactNode;
  /** Http 통신 baseurl(도메인) */
  baseurl: string;
  /** 전역으로 제공할 interceptor class 리스트 */
  rootInterceptors?: Interceptor[];
};
export const HttpContext = createContext<HttpContextType>({
  httpClient: new HttpClient('', []),
});
function HttpProvider({
  children,
  baseurl,
  rootInterceptors = [],
}: HttpProviderProps) {
  const httpClient = new HttpClient(baseurl, rootInterceptors);
  const value = useMemo(() => ({
    httpClient,
  }), [httpClient, httpClient.interceptors]);

  return (
    <HttpContext.Provider value={value}>
      {children}
    </HttpContext.Provider>
  );
}
HttpProvider.defaultProps = {
  rootInterceptors: [],
};

export default HttpProvider;
