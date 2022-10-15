/*
 * @Date: 2022-10-15 19:35:40
 * @LastEditTime: 2022-10-15 22:23:23
 */

import { BeginContainerComp, BeginSliderComp } from '@beginalive/components/layouts'
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';

export const AppContainer = () => {
  return (
    <>
      <Global styles={css`
        #root {
          height: 100vh
        }
      `}/>
      <Container>
        <BeginSliderComp nickName='OYang'/>
        <BeginContainerComp>
          <Outlet />
        </BeginContainerComp>
      </Container>
    </>
  )
}


const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  overflow: 'hidden',
  '& > div:first-of-type': {
    width: 200
  },
  '& > div:last-child': {
    flex: 1
  }

})

// const ContainerBeginSliderComp = styled(BeginSliderComp)({
//   width: 200
// })

// const ContainerBeginContainerComp = styled(BeginContainerComp)({
//   flex: 1
// })
