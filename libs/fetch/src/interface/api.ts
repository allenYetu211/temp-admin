/*
 * @Date: 2022-09-28 00:26:37
 * @LastEditTime: 2022-10-23 22:48:52
 */
interface ResponseType<T> {
  data: T;
  status: 'error' | 'success';
}


export type API = {

  '/auth/signin': ResponseType<{
    accessToken: string;
    name: string;
  }>;

  '/article/create': ResponseType<ArticleType[]>;
  '/article/all': ResponseType<ArticleType[]>;
  '/article': ResponseType<ArticleType>;
}

export type ArticleType = {
  author: string;
  container: string;
  create_time: string
  description: string
  like: number
  origin: boolean
  public: boolean
  state: boolean
  tags: string[]
  title: string
  update_time: string
  view: number,
  _id: string
}

// export type ResultType = {
//   [key in keyof API]: API[key]['data']
// }


export type MethodType = 'post' | 'get' | 'delete' | 'put'
