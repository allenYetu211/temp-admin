/*
 * @Date: 2022-09-28 00:22:58
 * @LastEditTime: 2022-10-14 00:14:55
 */
import useSwr, { KeyedMutator } from 'swr';
import { API, ResultType, MethodType } from './interface'
import Fetch from './HTTPBase'



const API_HOST = 'http://localhost:8080'

const F = new Fetch(API_HOST)

function CommonSWR<URL extends keyof API>(url: URL, method: MethodType, ...other: any): {
  data: ResultType[URL] | undefined,
  isLoading: boolean,
  mutate: KeyedMutator<ResultType[URL]>
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
 *
 * @param params
 */
export async function FetchSingIn(params: { username: string, password: string }) {
  // return CommonSWR(, 'post', params)
  return await F.FetchAction('/auth/signin', 'post', params)
}

