/*
 * @Date: 2022-10-20 23:28:57
 * @LastEditTime: 2022-10-22 19:58:00
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
