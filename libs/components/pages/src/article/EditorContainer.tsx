/*
 * @Date: 2022-10-22 19:42:49
 * @LastEditTime: 2022-10-22 20:33:18
 */

import { URow, UCol } from '@beginalive/components/ui'
import { MarkdownRenderComp, MarkdownInputComp } from '@beginalive/components/markdown'
import styled from '@emotion/styled';
import { COLOR } from '@beginalive/components/ui';

export const EditorContainer = () => {
  return (
    <Container>
      <InputContainer>
        <MarkdownInputComp />
      </InputContainer>

      <RenderContainer>
        <MarkdownRenderComp />
      </RenderContainer>
    </Container>
  )
}


const InputContainer = styled('div')({
  height: '100%',
  flex: 1,
  padding: '10px',
  'textarea': {
    border: 'none',
    padding: 0,
    height: '100%',
    resize: 'none',
    ':active': {
      border: 'none',
    },
    ':focus': {
      boxShadow: 'none'
    }
  }
})


const RenderContainer = styled('div')({
  height: '100%',
  flex: 1,
  padding: '10px',
  borderLeft: `1px solid ${COLOR.border_co}`
})

const Container = styled('div')({
  background: '#2e3441',
  border: `1px solid ${COLOR.border_co}`,
  display: 'flex',
  flex: 1,
  ':hover': {
    border: `1px solid ${COLOR.mc}`,
  },
  ':active': {
    border: `1px solid ${COLOR.mc}`,
  },
  ':focus': {
    border: `1px solid ${COLOR.mc}`,
  },


})

