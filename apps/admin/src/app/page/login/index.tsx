/*
 * @Date: 2022-10-15 17:19:39
 * @LastEditTime: 2022-10-15 17:22:37
 */
import styled from '@emotion/styled'
import { LoginContainer } from '@beginalive/components/pages'
import LoginBg from '../../assets/images/login-bg.png'

export function LoginPage() {
  return (
    <>
      <LoginContainer />
      {/* <BAImag src={LoginBg}/> */}
    </>

  )
}

const BAImag = styled('img')({
  maxWidth: '100%',
  objectFit: 'contain'
})
