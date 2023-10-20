import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WebRoutes from './website/webRoutes/WebRoutes';
import AdminRoutes from './admin/adminRoutes/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebRoutes />} />
        <Route path="/admin" element={<AdminRoutes/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
