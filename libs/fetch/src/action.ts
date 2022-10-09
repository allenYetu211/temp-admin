/*
 * @Date: 2022-09-28 00:48:00
 * @LastEditTime: 2022-09-28 00:58:11
 */
import { API } from './interface'
import { FETCH } from './ajax'

export type ActionType = {
  [key in keyof API]: Function
}

export const action: ActionType = {
  '/user/login': FETCH.post
}
