/*
 * @Date: 2022-10-20 23:45:32
 * @LastEditTime: 2022-10-23 22:15:35
 */

import { FC, useRef } from 'react'
import { UForm, UInput, UTextArea } from '@beginalive/components/ui'
import { EditorContainer } from './EditorContainer'
import styled from '@emotion/styled';

// import { useAtom } from 'jotai'
// import { ArticleContent } from '@beginalive/components/markdown'


interface ArticleFromCompProps {
  childrenRef: React.MutableRefObject<any>,
  handleSubmitFinish: (value: any) => void;
}

export const ArticleFromComp: FC<ArticleFromCompProps> = (props) => {


  const { childrenRef, handleSubmitFinish } = props
  const { current } = useRef([
    {
      name: 'title', label: '标题',
      rules: [{ required: true, message: '文章标题' }],
      node: <UInput placeholder='文章标题' />,
    },
    {
      name: 'description', label: '描述',
      rules: [{ required: true, message: '输入描述' }],
      node: <UTextArea placeholder='文章描述' />,
    },
    // {
    //   name: 'tag', label: '标签',
    //   node: (
    //     <>
    //       <UTag> tag </UTag>
    //     </>
    //   )
    // }
  ])

  return (
    <>
      <FormContainer showLabel={true} columns={current} CRef={childrenRef} onFinish={handleSubmitFinish} />
      <EditorContainer />
    </>
  )
}


const FormContainer = styled(UForm)({
})

