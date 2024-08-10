import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Element }) => {
  const { auth } = useAuth();

  return auth.token ? <Element /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
