/*
 * @Date: 2022-09-28 00:22:58
 * @LastEditTime: 2022-10-23 22:44:56
 */
import useSwr, { KeyedMutator } from 'swr';
import { API, MethodType } from './interface'
import Fetch from './HTTPBase'



const API_HOST = 'http://localhost:8080'

const F = new Fetch(API_HOST)

function CommonSWR<URL extends keyof API>(url: URL, method: MethodType, ...other: any): {
  data: API[URL]['data'] | undefined,
  isLoading: boolean,
  mutate: KeyedMutator<API[URL]['data']>
} {
  const { data, error, mutate } = useSwr(url, () =>
    F.FetchAction(url, method, { ...other })
  );

  return {
    data,
    isLoading: !error && !data,
    mutate
  };
}


/**
 * 登录
 * @param params
 */
export async function FetchSingIn(params: { username: string, password: string }) {
  // return CommonSWR(, 'post', params)
  return await F.FetchAction('/auth/signin', 'post', params)
}

/**
 *
 * @param params
 * @returns
 */
export async function FetchArticleCreate(params: any) {
  // return CommonSWR(, 'post', params)
  return await F.FetchAction('/article/create', 'post', params)
}


/**
 * 获取全部文章
 * @param params
 * @returns
 */
export async function FetchArticleList() {
  return await F.FetchAction('/article/all', 'get')
}


export async function FetchArticleId(id: string) {
  return await F.FetchAction(`/article`, 'get', null, id)
}



export async function FetchUpdateArticleId(id: string, body: any) {
  console.log('body>>>>', body);
  return await F.FetchAction(`/article`, 'put', body, id)
}
