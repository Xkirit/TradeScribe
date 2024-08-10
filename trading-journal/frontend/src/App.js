import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Trades from './pages/Trades';
import Analysis from './pages/Analysis';
import Settings from './pages/Settings';
import Help from './pages/Help';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import SignUp from './pages/signup';
const App = () => {
  return (
    
      <Router basename="/TradingJournalv2">
        <AuthProvider>
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/trades" element={<Trades/>} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
        </AuthProvider>
      </Router>
    
  );
};

export default App;
