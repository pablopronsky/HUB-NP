/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Hub from './pages/Hub';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
