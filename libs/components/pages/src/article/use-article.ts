/*
 * @Date: 2022-10-20 23:47:58
 * @LastEditTime: 2022-10-20 23:49:23
 */
import { useRef } from 'react';

export const useArticle = () => {
  const childrenRef: any = useRef()

  const handleSubmitFinish = (value: any) => {
    console.log('value', value)
  }

  return {
    childrenRef,
    handleSubmitFinish
  }
}
