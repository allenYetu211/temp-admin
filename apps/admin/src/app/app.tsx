/*
 * @Date: 2022-09-20 12:02:43
 * @LastEditTime: 2022-09-20 17:07:03
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes, Link } from 'react-router-dom';
import { Editor } from '@beginalive/components/editor';

export function App() {
  return (
    <>
      <Editor />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
