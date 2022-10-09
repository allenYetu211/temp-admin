/*
 * @Date: 2022-09-27 00:14:30
 * @LastEditTime: 2022-09-28 01:02:50
 */
import { atom, useAtom } from 'jotai'
import { useCallback, useMemo } from 'react';
import { API, useRequestHooks } from '@beginalive/fetch'

type SingInType = { password: string, username: string }

const username = atom<SingInType['username']>('')
const password = atom<SingInType['password']>('')

export const useSingIn = () => {
  const [user, set_user] = useAtom(username)
  const [pwd, set_pwd] = useAtom(password)

  const handleUser = (val: string) => {
    set_user(val)
  }

  const handlePwd = (val: string) => {
    set_pwd(val)
  }

  const submit = (val: any) => {
    console.log('object', val);
    const { data, isLoading, error } = useRequestHooks('/user/login', {
      user,
      pwd
    })

  }

  return {
    user,
    pwd,
    submit,
    handlePwd,
    handleUser
  }
}
