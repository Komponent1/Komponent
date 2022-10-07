import Interceptor from './httpInterceptor';

class HttpClient {
  private baseurl: string;
  public interceptors: Interceptor[];

  constructor(baseurl: string, interceptors: Interceptor[]) {
    this.baseurl = baseurl;
    this.interceptors = [...interceptors];
  }

  private async call<D>(req: Request, flat?: (res: Response) => Promise<D>) {
    let newReq = req;
    this.interceptors.forEach((interceptor) => {
      newReq = interceptor.forward(req);
    });
    const res = await fetch(newReq);
    // eslint-disable-next-line no-restricted-syntax
    for (const interceptor of this.interceptors) {
      // eslint-disable-next-line no-await-in-loop
      await interceptor.backward(res);
    }
    if (flat) {
      const data = await flat(res);
      return data;
    }
    return res;
  }
  async get<D>(
    path: string,
    config?: RequestInit,
    flat?: (res: Response) => Promise<D>,
  ): Promise<D | Response> {
    const req = new Request(`${this.baseurl}/${path}`, {
      ...config,
      method: 'GET',
    });
    return this.call(req, flat);
  }
  async post<D>(
    path: string,
    config?: RequestInit,
    flat?: (res: Response) => Promise<D>,
  ) {
    const req = new Request(`${this.baseurl}/${path}`, {
      ...config,
      method: 'POST',
    });
    return this.call(req, flat);
  }
  async patch<D>(
    path: string,
    config?: RequestInit,
    flat?: (res: Response) => Promise<D>,
  ) {
    const req = new Request(`${this.baseurl}/${path}`, {
      ...config,
      method: 'PATCH',
    });
    return this.call(req, flat);
  }
  async delete<D>(
    path: string,
    config?: RequestInit,
    flat?: (res: Response) => Promise<D>,
  ) {
    const req = new Request(`${this.baseurl}/${path}`, {
      ...config,
      method: 'DELETE',
    });
    return this.call(req, flat);
  }
}

export default HttpClient;
