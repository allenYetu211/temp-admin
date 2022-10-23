/*
 * @Date: 2022-10-23 19:56:02
 * @LastEditTime: 2022-10-23 21:33:35
 */
import { FetchArticleList, ArticleType } from '@beginalive/fetch'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from '@beginalive/tools'

export const useList = () => {

  const [list, setList] = useState<ArticleType[]>([])
  const { navigate } = useRouter()

  useEffect(() => {
    findList()
  }, [])

  const findList = useCallback(async () => {
    const result = await FetchArticleList()
    setList(result)
  }, [])

  const handleClickSkipArticleDetail = useCallback((id: string) => {
    navigate(`/ArticleWrite/${id}`)
  }, [])

  return {
    list,
    handleClickSkipArticleDetail
  }
}
