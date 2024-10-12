import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
