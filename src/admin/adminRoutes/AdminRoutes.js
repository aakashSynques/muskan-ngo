// admin/adminRoutes/AdminRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AdminRoutes;
