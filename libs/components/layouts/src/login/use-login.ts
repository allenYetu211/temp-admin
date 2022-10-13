/*
 * @Date: 2022-10-12 00:21:51
 * @LastEditTime: 2022-10-14 00:52:00
 */
import { useRef } from 'react';
import { FetchSingIn } from '@beginalive/fetch'
import { UNotification } from '@beginalive/components/ui'
import { useRouter } from '@beginalive/tools'

export function useLogin() {

  const childrenRef: any = useRef()
  const { navigate } = useRouter()

  const handleSubmit = () => {
    const form = childrenRef.current.getForm()
    form.submit()
  }

  const handleSubmitFinish = async (value: { username: string, password: string }) => {
    try {
      const result = await FetchSingIn(value)
      localStorage.setItem('Authorization', `Bearer ${result.access_token}`)
      navigate('/dashboard')
    } catch (e: unknown) {
      const error = e as any
      // console.log('object', await error.data, error.status);
      if (error.status === 401) {
        UNotification.error({
          message: '登陆错误',
          description: '输入账号信息有误',
          placement: 'topLeft'
        })
      }
    }
  }

  return {
    handleSubmit,
    handleSubmitFinish,
    childrenRef
  }

}
