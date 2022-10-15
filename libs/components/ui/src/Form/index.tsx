/*
 * @Date: 2022-10-11 22:58:07
 * @LastEditTime: 2022-10-15 17:14:49
 */

import { FC, PropsWithChildren, useImperativeHandle } from 'react'
import { Form } from 'antd';
import type { Rule, FormInstance } from 'rc-field-form/lib/interface'
import styled from '@emotion/styled'


interface FormCompoProps {
  columns: {
    label: string
    name: string
    node: JSX.Element
    rules: Rule[],
    initialValue?: any
  }[],
  CRef: React.MutableRefObject<any>,
  onFinish: (value: any) => void
}

const FormComp: FC<PropsWithChildren<FormCompoProps>> = (props) => {
  const { children, columns, CRef, onFinish, ...other } = props
  const [form] = Form.useForm();

  useImperativeHandle(CRef, () => ({
    getForm: () => form,
  }));


  return (
    <>
      <FormUI
        form={form} {...other} onFinish={onFinish}>
        {
          columns.map((item) => {
            return (
              <Form.Item name={item.name} rules={item.rules} key={item.name} initialValue={item.initialValue}>
                {item.node}
              </Form.Item>
            )
          })
        }
      </FormUI>
      {children}
    </>
  )
}

const FormUI = styled(Form)({
  '.ant-form-item-explain-error': {
    fontSize: '12px'
  }
})

export default FormComp
