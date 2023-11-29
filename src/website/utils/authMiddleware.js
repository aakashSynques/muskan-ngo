// authMiddleware.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from './authService';


const PrivateRoute = ({ element }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/account/login" />;
  }
  return element;
};

export default PrivateRoute;



