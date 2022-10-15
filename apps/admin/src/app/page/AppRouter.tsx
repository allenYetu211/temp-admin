/*
 * @Date: 2022-10-15 19:33:41
 * @LastEditTime: 2022-10-15 21:27:32
 */
/*
 * @Date: 2022-09-20 12:02:43
 * @LastEditTime: 2022-10-15 19:56:31
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes, Link } from 'react-router-dom';
import { css, Global } from '@emotion/react';
import { COLOR } from '@beginalive/components/ui'

import { LoginPage } from '../page/login'
import { DashboardPage } from '../page/dashboard'
import { ArticlePage } from '../page/article'
import { TagsPage } from '../page/tags'

import { AppContainer } from '../page/AppContainer'

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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/tags" element={<TagsPage />} />
        </Route>

      </Routes>
      {/* END: routes */}
    </>
  );
}
