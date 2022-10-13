/*
 * @Date: 2022-09-25 12:56:55
 * @LastEditTime: 2022-10-14 00:44:17
 */
import styled from '@emotion/styled'
import { LoginContainer } from '@beginalive/components/layouts'
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
