/*
 * @Date: 2022-10-20 23:28:57
 * @LastEditTime: 2022-10-23 09:32:40
 */
import { UCard, UForm } from '@beginalive/components/ui'
import { ArticleFromComp } from './ArticleFrom'
import styled from '@emotion/styled';

export const WriteContainer = () => {
  return (
    <>
      <FlexFullContainer>
        <ArticleFromComp />
      </FlexFullContainer>
    </>
  )
}

const FlexFullContainer = styled(UCard)({
  flex: 1,
  '.ant-card-body': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
})
