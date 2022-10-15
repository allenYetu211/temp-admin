/*
 * @Date: 2022-10-12 00:24:33
 * @LastEditTime: 2022-10-15 17:52:55
 */
import { FC, PropsWithChildren } from 'react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd/lib/button'
import styled from '@emotion/styled'


const BaseButtonComp: FC<PropsWithChildren<ButtonProps>> = (props) => {

  const { children, ...other } = props
  return (
    <ButtonUI {...other}>
      { children }
    </ButtonUI>
  )
}

const ButtonUI = styled(Button)({
  width: '100%',
})

export default BaseButtonComp;
