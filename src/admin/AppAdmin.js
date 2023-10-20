// Routes.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';


function AppAdmin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppAdmin;
