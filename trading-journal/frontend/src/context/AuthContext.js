import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null });
  const navigate = useNavigate(); // This hook requires being inside a Router

  const login = (token) => {
    setAuth({ token });
    localStorage.setItem('token', token); // Save the token to localStorage
    navigate('/trades');
  };
  
  const logout = () => {
    setAuth({ token: null });
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/signin');
  };
  
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setAuth({ token: savedToken }); // Restore the token from localStorage
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
