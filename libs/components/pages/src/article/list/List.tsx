/*
 * @Date: 2022-10-23 19:53:53
 * @LastEditTime: 2022-10-23 21:30:11
 */
import { useList } from './use-list'
import { UCard, UCol, URow, UTypography, COLOR } from '@beginalive/components/ui'
import dayjs from 'dayjs'
import styled from '@emotion/styled';

const { Title } = UTypography
export const ArticleListComp = () => {

  const {
    list,
    handleClickSkipArticleDetail
  } = useList()

  return (
    <URow gutter={[16, 16]}>

      {
        list.map((item) => {
          return (
            <UCol
              span={24}
              key={item._id}
              onClick={() => {
                handleClickSkipArticleDetail(item._id)
              }}>
              <UCard>
                <URow justify='space-between'>

                  <UCol flex={1}>
                    <Title level={3}> {item.title}</Title>
                  </UCol>

                  <TimeColUI flex={1}>
                    <URow gutter={[20, 0]} justify='end'>
                      <UCol>喜欢: {item.like}</UCol>
                      <UCol>是否公开：{item.public ? '是' : '否'}</UCol>
                      <UCol>创建时间{dayjs(item.create_time).format('YYYY/MM/DD HH:mm:ss')}</UCol>
                    </URow>
                  </TimeColUI>

                </URow>
                <URow>描述： {item.description}</URow>
              </UCard>
            </UCol>
          )
        })
      }
    </URow>
  )
}


const TimeColUI = styled(UCol)({
  fontSize: '12px',
  color: `${COLOR.tdc}`
})


