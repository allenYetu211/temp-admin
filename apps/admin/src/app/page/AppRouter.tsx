/*
 * @Date: 2022-10-15 19:33:41
 * @LastEditTime: 2022-10-20 23:38:50
 */
/*
 * @Date: 2022-09-20 12:02:43
 * @LastEditTime: 2022-10-15 19:56:31
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes } from 'react-router-dom';
import { css, Global } from '@emotion/react';
import { COLOR } from '@beginalive/components/ui'

import { AppContainer } from '../page/AppContainer'
import { LoginPage } from '../page/login'
import { DashboardPage } from '../page/dashboard'
import { TagsPage } from '../page/tags'

import { ArticleContainer } from './ArticleContainer'
import { ArticleListPage } from './articleList'
import { ArticleWritePage } from './articleWrite'

export function AppRouter() {
  return (
    <>
      <Global styles={css`
        body {
          background: ${COLOR.bc};
        }
      `} />
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<AppContainer />}>
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route element={<ArticleContainer />} >
            <Route path="ArticleList" element={<ArticleListPage />} />
            <Route path="ArticleWrite" element={<ArticleWritePage />} />
          </Route>
          <Route path="/Tags" element={<TagsPage />} />
        </Route>

      </Routes>
      {/* END: routes */}
    </>
  );
}
