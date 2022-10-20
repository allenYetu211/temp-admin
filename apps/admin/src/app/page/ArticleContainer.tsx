/*
 * @Date: 2022-10-15 21:25:06
 * @LastEditTime: 2022-10-20 23:01:54
 */
import { Outlet } from 'react-router-dom'
import { ArticleContainer as Container } from '@beginalive/components/layouts'

export const ArticleContainer = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
