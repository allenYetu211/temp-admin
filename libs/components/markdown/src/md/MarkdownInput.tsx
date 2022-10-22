/*
 * @Date: 2022-10-22 19:26:27
 * @LastEditTime: 2022-10-22 19:37:48
 */

import { StateMdContainer } from '../store'
import { useAtom } from 'jotai'
import { UTextArea } from '@beginalive/components/ui'
import styled from '@emotion/styled';

export const MarkdownInputComp = () => {
  const [container, setContainer] = useAtom(StateMdContainer)
  return (
      <MarkdownTextArea onChange={(e) => { setContainer(e.target.value) }}>
        {container}
      </MarkdownTextArea>
  )
}

const MarkdownTextArea = styled(UTextArea)({
  height: '100%'
})
