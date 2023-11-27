// authMiddleware.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from './authService';

const PrivateRouteWeb = ({ element }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/account/login" />;
  }
  return element;
};

export default PrivateRouteWeb;
