/*
 * @Date: 2022-10-20 23:47:58
 * @LastEditTime: 2022-10-23 23:08:54
 */
import { useCallback, useEffect, useRef } from 'react';
import { useAtom } from 'jotai'
import { StateMdContainer, ArticleContent } from '@beginalive/components/markdown'
import { FetchArticleCreate, FetchArticleId, FetchUpdateArticleId } from '@beginalive/fetch'
import { useRouter } from '@beginalive/tools'


export const useArticle = () => {
  const [container, setContainer] = useAtom(StateMdContainer)
  const [articleContent, setArticleContent] = useAtom(ArticleContent)
  const childrenRef: React.MutableRefObject<any> = useRef()
  const isEditCurrent = useRef<boolean>(false)

  const { params } = useRouter()

  useEffect(() => {
    if (params && params['id']) {
      FetchArticleContainer()
    }

    return () => {
      setContainer('')
    }
  }, [params])

  const FetchArticleContainer = useCallback(async () => {
    const result = await FetchArticleId(params['id']!)
    const form = childrenRef.current.getForm()
    const { container, _id, ...other } = result
    isEditCurrent.current = true
    setContainer(() => {
      localStorage.setItem('articleContent', container)
      return container
    })
    setArticleContent(other)
    form.setFieldValue('title', result.title)
    form.setFieldValue('description', result.description)
  }, [])

  const handleSubmit = () => {
    const form = childrenRef.current.getForm()
    form.submit()
  }



  const handleSubmitFinish = async (value: { title: string, description: string }) => {
    console.log('isEditCurrent.current', isEditCurrent.current);
    if (isEditCurrent.current) {
      const body = Object.assign({}, articleContent, value, {
        container
      })
      console.log('isEditCurrent body', body);
      await FetchUpdateArticleId(params['id']!, body)
    } else {
      await FetchArticleCreate(Object.assign({}, value, {
        container,
        author: 'Allen OYang'
      }))
    }

  }

  return {
    childrenRef,
    handleSubmitFinish,
    handleSubmit
  }
}
