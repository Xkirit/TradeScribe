import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Trades from './pages/Trades';
import Analysis from './pages/Analysis';
import Settings from './pages/Settings';
import Help from './pages/Help';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="trades" element={<Trades/>} />
        <Route path="analysis" element={<Analysis/>} />
        <Route path="settings" element={<Settings/>} />
        <Route path="help" element={<Help/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
