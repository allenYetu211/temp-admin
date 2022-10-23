/*
 * @Date: 2022-10-20 23:45:32
 * @LastEditTime: 2022-10-23 10:58:01
 */

import { useRef } from 'react'
import { UForm, UInput, UTextArea, UTag, URow, UCol } from '@beginalive/components/ui'
import { useArticle } from './use-article'
import { EditorContainer } from './EditorContainer'
import styled from '@emotion/styled';


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
    // {
    //   name: 'tag', label: '标签',
    //   node: (
    //     <>
    //       <UTag> 1 </UTag>
    //       <UTag> 2</UTag>
    //       <UTag> 3 </UTag>
    //     </>
    //   )
    // }
  ])

  const {
    childrenRef,
    handleSubmitFinish
  } = useArticle()

  return (
    <>
      <FormContainer showLabel={true} columns={current} CRef={childrenRef} onFinish={handleSubmitFinish} />
      <EditorContainer />
    </>
  )
}


const FormContainer = styled(UForm)({
})

