/*
 * @Date: 2022-10-20 23:03:16
 * @LastEditTime: 2022-10-20 23:26:55
 */
import { FC, PropsWithChildren, useMemo } from 'react'
import { useRouter } from '@beginalive/tools'
import { UTypography } from '@beginalive/components/ui'
import { MenuItem } from '../enum'

const { Title } = UTypography

export const ArticleContainer: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const { location } = useRouter()


  const title = useMemo(() => {
    const name = location.pathname.slice(1)
    if (Object.keys(MenuItem).includes(name)) {
      return MenuItem[(name as keyof typeof MenuItem)]
    }
    return ''
  }, [location])

  return (
    <>
      <Title level={4}>
        {title}
      </Title>

      {children}
    </>
  )
}
