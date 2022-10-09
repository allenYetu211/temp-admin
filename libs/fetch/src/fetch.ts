import useSwr from 'swr';
import { action } from './action';
import { API } from './interface'

function CommonSWR(id: keyof API, fun: any, ...other: any) {
  const { data, error } = useSwr(id, () =>
    fun({ ...other })
  );

  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
}

export  function useRequestHooks(id: keyof API, ...other: any) {
  return CommonSWR(id, action[id], other)
}
