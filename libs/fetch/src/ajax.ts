
import { API } from './interface'

const API_HOST = 'http://localhost:8080'

class Fetch {
  public baseAPI: string = '';
  constructor (baseAPI: string) {
    this.baseAPI = baseAPI;
  }

  public async get<URL extends keyof API>(
    url: URL,
    param?: { [k in string]: any },
  ): Promise<API[URL]> {
    const urlAPI: string = param ? `${url}?${new URLSearchParams(param)}` : url;
    return await this.baseFetch(urlAPI);
  }

  public async post<URL extends keyof API>(url: URL, body: any): Promise<API[URL]> {
    return await this.baseFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body),
      ...body,
    });
  }

  public async delete<URL extends keyof API>(
    url: URL,
    param?: { [k in string]: any },
  ): Promise<API[URL]> {
    const urlAPI: string = param ? `${url}?${new URLSearchParams(param)}` : url;
    return await this.baseFetch(urlAPI, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  private async baseFetch(
    url: string,
    config: RequestInit = {
      headers: {
        Authorization: localStorage.getItem('Authorization') || '',
      },
    },
  ) {
    try {
      if (config?.headers) {
        Object.assign(config.headers, {
          Authorization: localStorage.getItem('Authorization'),
        });
      }

      const res = await fetch(`${this.baseAPI}${url}`, { ...config });
      if (res.ok) {
        return res.json();
      }

      if (res.status === 401) {
        location.hash = '/login';
      }

      throw `[STATUS]: ${res.status} | [MESSAGE]: ${res.statusText}`;
    } catch (e) {
      throw new Error(`[ERROR]: ${e}`);
    }
  }
}

const FETCH = new Fetch(API_HOST);

export { FETCH };
