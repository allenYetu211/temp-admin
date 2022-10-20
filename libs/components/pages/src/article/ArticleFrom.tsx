/*
 * @Date: 2022-10-20 23:45:32
 * @LastEditTime: 2022-10-21 00:30:10
 */

import { useRef } from 'react'
import { UForm, UInput, UTextArea, UTag } from '@beginalive/components/ui'
import { useArticle } from './use-article'

export const ArticleFromComp = () => {

  const { current } = useRef([
    {
      name: 'title', label: '标题',
      rules: [{ required: true, message: '文章标题' }],
      node: <UInput placeholder='文章标题' />
    },
    {
      name: 'describe', label: '描述',
      rules: [{ required: true, message: '输入描述' }],
      node: <UTextArea placeholder='文章描述' />
    },
    {
      name: 'tag', label: '标签',
      node: (
        <>
          <UTag> 1 </UTag>
          <UTag> 2</UTag>
          <UTag> 3 </UTag>
        </>
      )
    },
    {
      name: 'content', label: '内容',
      node: <UInput />
    }
  ])

  const {
    childrenRef,
    handleSubmitFinish
  } = useArticle()

  return (
    <>
      <UForm showLabel={true} columns={current} CRef={childrenRef} onFinish={handleSubmitFinish} />
    </>
  )
}
