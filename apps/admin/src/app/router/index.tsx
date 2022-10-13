/*
 * @Date: 2022-09-20 12:02:43
 * @LastEditTime: 2022-09-20 17:07:03
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes, Link } from 'react-router-dom';
import { Editor } from '@beginalive/components/editor';
import { LoginPage } from '../page/login'
import { DashboardPage } from '../page/dashboard'

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<LoginPage />} />
        <Route path="/dashboard"  element={<DashboardPage />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default Router;
