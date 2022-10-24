/*
 * @Date: 2022-10-22 17:20:08
 * @LastEditTime: 2022-10-23 23:45:22
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
import { COLOR } from '@beginalive/components/ui';

interface MarkdownRenderCompProps {
}

export const MarkdownRenderComp: FC<MarkdownRenderCompProps> = (props) => {
  const [container] = useAtom(StateMdContainer)

  const renderers = {
    code: CodeComp,
    em: EmComp,
    // strong: strongComp
  };
  return (
    <Container>
      <Markdown children={container} components={renderers} remarkPlugins={[remarkGfm]} />
    </Container>
  )
}


const strongComp = ({ node, inline, className, children, ...props }: any) => {
  return (
    <StrongCompUI className={className} {...props}>
      {children}
    </StrongCompUI>
  )
}
const StrongCompUI = styled('strong')({
  fontSize: 12
})


const EmComp = ({ node, inline, className, children, ...props }: any) => {
  return (
    <EmCompUI className={className} {...props}>
      {children}
    </EmCompUI>
  )
}

const EmCompUI = styled('em')({
  color: '#ec8484'
})

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
    <code className={className} {...props} style={{
        borderRadius: '5px',
        padding: '0 5px',
        background: `rgb(105 105 105)`
      }}
    >
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

