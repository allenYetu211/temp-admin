/*
 * @Date: 2022-10-15 19:24:01
 * @LastEditTime: 2022-10-15 21:35:52
 */
import styled from '@emotion/styled';
import { COLOR } from "@beginalive/components/ui";
import { FC, PropsWithChildren } from 'react'

export const BeginContainerComp: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled('div')({
  width: '100%',
  padding: '25px',
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
  backgroundColor: COLOR.cbc,
})
