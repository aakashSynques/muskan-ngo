import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './website/pages/Home';
import Login from './admin/pages/Login';
import './admin/assets/style.css'
import AdminDashboard from './admin/pages/AdminDashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<WebRoutes />} />
        <Route path="/admin" element={<AdminRoutes/>} /> */}

        {/* website Routes     */}
        <Route path='/' element={<Home />} />



        {/* admin Routes */}
        <Route path='/admin' element={<Login />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
