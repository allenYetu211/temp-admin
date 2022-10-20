/*
 * @Date: 2022-10-11 23:44:31
 * @LastEditTime: 2022-10-12 00:31:52
 */
import { FC } from 'react'
import { Input, InputProps, InputRef } from 'antd'
import styled from '@emotion/styled'

interface InputCompProps extends InputProps { }


const InputComp: FC<InputCompProps> = (props) => {
  const { size = 'middle', ...other } = props
  return (
    <InputUI {...other} size={size} />
  )
}




const InputUI = styled(Input)({
  '.ant-input-prefix': {
    marginRight: '10px'
  },
  '.ant-input': {
    fontSize: '12px'
  }
})

export const UTextArea = Input.TextArea

export default InputComp
