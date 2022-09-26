/*
 * @Date: 2022-09-27 00:14:30
 * @LastEditTime: 2022-09-27 00:40:05
 */
import { atom, useAtom } from 'jotai'
import { useCallback, useMemo } from 'react';

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

  const submit = () => {
    console.log('submit', user, pwd)

  }

  return {
    user,
    pwd,
    submit,
    handlePwd,
    handleUser
  }
}
