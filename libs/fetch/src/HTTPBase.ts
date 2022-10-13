/*
 * @Date: 2022-09-28 00:25:59
 * @LastEditTime: 2022-10-14 00:40:38
 */

import { API, ResultType, MethodType } from './interface'


class Fetch {
  public baseAPI: string = '';
  constructor (baseAPI: string) {
    this.baseAPI = baseAPI;
  }
  public FetchAction<URL extends keyof API>(url: URL, method: MethodType, body: any): Promise<ResultType[URL]> {
    return this[method](url, body)
  }



  public async get<URL extends keyof API>(
    url: URL,
    param?: { [k in string]: any },
  ): Promise<ResultType[URL]> {
    const urlAPI: string = param ? `${url}?${new URLSearchParams(param)}` : url;
    const { data } = await this.baseFetch(urlAPI);
    return data
  }



  public async post<URL extends keyof API>(url: URL, body: any): Promise<ResultType[URL]> {
    const { data } = await this.baseFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body),
      ...body,
    });

    return data
  }



  public async delete<URL extends keyof API>(
    url: URL,
    param?: { [k in string]: any },
  ): Promise<ResultType[URL]> {

    const urlAPI: string = param ? `${url}?${new URLSearchParams(param)}` : url;
    const { data } = await this.baseFetch(urlAPI, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    return data
  }

  private async baseFetch<URL extends keyof API>(
    url: string,
    config: RequestInit = {
      headers: {
        Authorization: localStorage.getItem('Authorization') || '',
      },
    },
  ): Promise<API[URL]> {

    if (config?.headers) {
      Object.assign(config.headers, {
        Authorization: localStorage.getItem('Authorization'),
      });
    }

    const res = await fetch(`${this.baseAPI}${url}`, { ...config });

    if (res.ok) {
      return await res.json();
    }

    // if (res.status === 401) {
    //   location.hash = '/login';
    // }

    throw new Exception(res.status, res.json())

  }
}




class Exception {
  status: number;
  data: any
  constructor (status: number, data: any) {
    this.status = status,
      this.data = data
  }
}

export default Fetch
