import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null });
  const navigate = useNavigate(); // This hook requires being inside a Router

  const login = (token) => {
    setAuth({ token });
    navigate('/trades');
  };

  const logout = () => {
    setAuth({ token: null });
    navigate('/signin');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
