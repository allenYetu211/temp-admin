/*
 * @Date: 2022-10-20 23:28:57
 * @LastEditTime: 2022-10-23 23:02:01
 */
import { UCard, URow, UCol } from '@beginalive/components/ui'
import { ArticleFromComp } from './ArticleFrom'
import styled from '@emotion/styled';
import { PublishOptionsComp } from './PublishOptions'
import { useArticle } from './use-article'


export const WriteContainer = () => {

  const {
    childrenRef,
    handleSubmitFinish,
    handleSubmit
  } = useArticle()

  return (
    <>

      <URow gutter={[16, 16]} justify='space-between' style={{height: '100%'}}>
        <UCol flex={1} style={{ width: '75%' }}>
          <FlexFullContainer>
            <ArticleFromComp handleSubmitFinish={handleSubmitFinish} childrenRef={childrenRef} />
          </FlexFullContainer>
        </UCol>

        <UCol flex={1}>
          <UCard>
            <PublishOptionsComp handleSubmit={handleSubmit} />
          </UCard>
        </UCol>
      </URow>
    </>
  )
}

const FlexFullContainer = styled(UCard)({
  flex: 1,
  height: '100%',
  '.ant-card-body': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
})
