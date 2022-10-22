/*
 * @Date: 2022-10-22 17:20:08
 * @LastEditTime: 2022-10-22 17:32:13
 */
import { FC } from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { StateMdContainer } from '../store'
import { useAtom } from 'jotai'

interface MarkdownRenderCompProps {
}

export const MarkdownRenderComp: FC<MarkdownRenderCompProps> = (props) => {
  const [container] = useAtom(StateMdContainer)
  return (
    <Markdown children={container} remarkPlugins={[remarkGfm]} />
  )
}
