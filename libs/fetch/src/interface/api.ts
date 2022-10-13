/*
 * @Date: 2022-09-28 00:26:37
 * @LastEditTime: 2022-10-13 23:45:40
 */
interface ResponseType<T> {
  data: T;
  status: 'error' | 'success';
}


export type API = {

  '/auth/signin': ResponseType<{
    access_token: string;
    name: string;
  }>;

}

export type ResultType = {
  [key in keyof API]: API[key]['data']
}


export type MethodType =  'post' | 'get' | 'delete'
