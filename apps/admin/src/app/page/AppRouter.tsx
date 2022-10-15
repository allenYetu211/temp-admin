/*
 * @Date: 2022-09-20 12:02:43
 * @LastEditTime: 2022-10-15 19:35:22
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes, Link } from 'react-router-dom';
import { LoginPage } from '../page/login'
import { DashboardPage } from '../page/dashboard'
import { css, Global } from '@emotion/react';
import { COLOR } from '@beginalive/components/ui'

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

        <Route>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

      </Routes>
      {/* END: routes */}
    </>
  );
}
