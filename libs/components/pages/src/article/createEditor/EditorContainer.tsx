/*
 * @Date: 2022-10-22 19:42:49
 * @LastEditTime: 2022-10-23 23:03:12
 */

import { useCallback, useRef, useState } from 'react'
import { MarkdownRenderComp, MarkdownInputComp } from '@beginalive/components/markdown'
import styled from '@emotion/styled';
import { COLOR } from '@beginalive/components/ui';
import { EditorToolsContainer } from './EditorToolsContainer'


export const EditorContainer = () => {
  const [hiddenRenderContainer, setHiddenRenderContainer] = useState<boolean>(true)
  const handleHiddenRenderContainer = useCallback((value: boolean) => {
    setHiddenRenderContainer(value)
  }, [])

  const EditorRef = useRef<HTMLDivElement>(null)
  const RenderRef = useRef<HTMLDivElement>(null)



  return (
    <Container ref={EditorRef}>

      <EditorToolsContainer
        handleHiddenRenderContainer={handleHiddenRenderContainer}
        fullTargetElement={EditorRef}
        renderElement={RenderRef}
      />

      <EditorContentContainer >
        <InputContainer id='InputContainer'>
          <MarkdownInputComp />
        </InputContainer>

        <RenderContainer ref={RenderRef} hide={hiddenRenderContainer} id='RenderContainer'>
          <MarkdownRenderComp />
        </RenderContainer>

      </EditorContentContainer>
    </Container>
  )
}



const InputContainer = styled('div')({
  height: '600px',
  overflow: 'auto',
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


const RenderContainer = styled('div')((props: { hide: boolean }) => {
  const { hide } = props
  return {
    display: hide ? 'none' : 'flex',
    height: '600px',
    overflow: 'auto',
    flex: 1,
    padding: '10px',
    background: '#2e3441',
  }
})

const Container = styled('div')({
  background: '#2e3441',
  border: `1px solid ${COLOR.border_co}`,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  ':fullscreen': {
    height: '100vh',
    '#InputContainer' : {
      height: '100vh'
    },

    '#RenderContainer': {
      height: '100vh'
    },
  },


})



const EditorContentContainer = styled('div')({
  display: 'flex',
  flex: 1,
})
