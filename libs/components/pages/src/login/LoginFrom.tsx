/*
 * @Date: 2022-10-11 23:29:05
 * @LastEditTime: 2022-10-15 17:18:15
 */
import { useRef } from 'react'
import { UForm, UInput, UButton, UTypography } from '@beginalive/components/ui'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useLogin } from './use-login';
import styled from '@emotion/styled';

const { Text, Title } = UTypography;

export const LoginForm = () => {
  const { current } = useRef([
    {
      name: 'username', label: '用户名',
      rules: [{ required: true, message: '请输入用户名' }],
      initialValue: 'OYang',
      node: <UInput placeholder='请输入用户名' prefix={<UserOutlined />} />
    },
    {
      name: 'password', label: '密码',
      rules: [{ required: true, message: '请输入密码' }],
      initialValue: 'OYang',
      node: <UInput type='Password' prefix={<LockOutlined />} placeholder='请输入密码' />
    },
  ])

  const {
    childrenRef,
    handleSubmit,
    handleSubmitFinish
  } = useLogin()



  return (
    <>
      <LoginFormUI>

        <Title level={3}>登录到</Title>
        <Title level={2}>Begin Alive</Title>


        <UForm  columns={current} CRef={childrenRef} onFinish={handleSubmitFinish} />

        <UButton type='primary' onClick={handleSubmit}>
          登陆
        </UButton>
      </LoginFormUI>
    </>
  )
}


const LoginFormUI = styled('div')({
  width: '30%',
  position: 'absolute',
  left: '50px',
  top: '50%',
  transform: 'translate3d(0, -50%, 0)'
})
