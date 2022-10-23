/*
 * @Date: 2022-10-22 19:26:27
 * @LastEditTime: 2022-10-22 22:16:55
 */

import { StateMdContainer } from '../store'
import { useAtom } from 'jotai'
import { UTextArea } from '@beginalive/components/ui'
import styled from '@emotion/styled';

export const MarkdownInputComp = () => {
  const [container, setContainer] = useAtom(StateMdContainer)
  const handleKeyDown = (e: any) => {
    if (e.keyCode == 9) {

      const { target } = e
      const {selectionStart, selectionEnd, value} = target
      e.preventDefault();
      const indent = '    ';
      const start = selectionStart;
      const end = selectionEnd;
      // @ts-ignore
      let selected = getSelection().toString();
      selected = indent + selected.replace(/\n/g, '\n' + indent);

      const nc = value.substring(0, start) + selected + value.substring(end);
      setContainer(nc)
      e.target.setSelectionRange(start + indent.length, start + selected.length);

    }
  }
  return (
    <MarkdownTextArea onKeyDown={handleKeyDown} onChange={(e) => { setContainer(e.target.value) }}>
      {container}
    </MarkdownTextArea>
  )
}

const MarkdownTextArea = styled(UTextArea)({
  height: '100%'
})
