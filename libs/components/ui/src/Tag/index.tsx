/*
 * @Date: 2022-10-21 00:22:22
 * @LastEditTime: 2022-10-21 00:26:57
 */
import { FC, PropsWithChildren } from 'react';
import { Tag } from 'antd';
import styled from '@emotion/styled'


export const UTag: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return (
    <TagUI>{children}</TagUI>
  )
}

const TagUI = styled(Tag)({
  padding: '0 15px',
  cursor: 'pointer'
})
