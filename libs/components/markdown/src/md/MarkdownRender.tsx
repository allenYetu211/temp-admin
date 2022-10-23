/*
 * @Date: 2022-10-22 17:20:08
 * @LastEditTime: 2022-10-22 21:54:00
 */
import { FC } from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { StateMdContainer } from '../store'
import { useAtom } from 'jotai'
import styled from '@emotion/styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { css } from '@emotion/react'

interface MarkdownRenderCompProps {
}

export const MarkdownRenderComp: FC<MarkdownRenderCompProps> = (props) => {
  const [container] = useAtom(StateMdContainer)

  const renderers = {
    code: CodeComp,
  };
  return (
    <Container>
      <Markdown children={container} components={renderers} remarkPlugins={[remarkGfm]} />
    </Container>
  )
}

const CodeComp = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighterUI
      children={String(children).replace(/\n$/, '')}
      style={atomDark}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}


const SyntaxHighlighterUI = styled(SyntaxHighlighter)({
  padding: '15px',
  fontSize: 12
})

const Container = styled('div')`
  p {
    font-size: 14px;
  }

  ul {
    padding: 10px 20px;
    font-size: 14px;
  }
  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }
`

