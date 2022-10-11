/*
 * @Date: 2022-10-12 00:21:51
 * @LastEditTime: 2022-10-12 00:40:02
 */
import { useRef } from 'react';

export function useLogin() {

  const childrenRef: any = useRef()

  const handleSubmit = () => {
    const form = childrenRef.current.getForm()
    console.log('form', form);
    form.submit()
  }

  const handleSubmitFinish = (value: any) => {
    console.log('value', value)
  }

  return {
    handleSubmit,
    handleSubmitFinish,
    childrenRef
  }

}
