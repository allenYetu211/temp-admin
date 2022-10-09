/*
 * @Date: 2022-09-25 12:56:55
 * @LastEditTime: 2022-09-26 23:17:27
 */
import { useState } from 'react';
import { LoginLayout } from '@beginalive/components/layouts'



export function LoginPage() {

  const [loginInfo, set_loginInfo] = useState<{ password: string, username: string }>({
    password: '',
    username: ''
  })

  return (
    <LoginLayout />
  )
}
