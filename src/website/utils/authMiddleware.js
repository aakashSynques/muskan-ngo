// authMiddleware.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from './authService';

const PrivateRoute = ({ element }) => {
  if (!authService.isAuthenticated()) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/account/login" />;
  }

  return element;
};

export default PrivateRoute;
