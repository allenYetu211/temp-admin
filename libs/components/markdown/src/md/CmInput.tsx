/*
 * @Date: 2022-10-23 07:38:41
 * @LastEditTime: 2022-10-23 09:30:19
 */
import { useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { atomone } from '@uiw/codemirror-theme-atomone';
import { useAtom } from 'jotai'
import { StateMdContainer } from '../store'
import styled from '@emotion/styled';


export const MarkdownInputComp = () => {
  const [container, setContainer] = useAtom(StateMdContainer)

  const onChange = useCallback((value: string, viewUpdate: any) => {
    setContainer(value)
  }, []);

  return <CodeMirror
    value={container}
    theme={atomone}
    onChange={onChange}
    extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />;
}


const CodeMirrorContainer = styled(CodeMirror)({
  '&.cm-theme': {
    height: '100%'
  }
})

