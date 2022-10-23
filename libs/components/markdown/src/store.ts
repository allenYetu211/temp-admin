/*
 * @Date: 2022-10-22 19:31:01
 * @LastEditTime: 2022-10-23 22:06:15
 */
import { atom } from 'jotai'

export const StateMdContainer = atom('')

export const ArticleContent = atom({
  author: '',
  create_time: '',
  description: '',
  like: 0,
  origin:false,
  public: false,
  state: false,
  tags: [''],
  title: '',
  update_time: '',
  view: 0
})
