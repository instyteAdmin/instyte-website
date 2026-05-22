import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DemoLogin from './demo/DemoLogin';
import DemoShell from './demo/DemoShell';

function App() {
  return (
    <Routes>
      <Route path="/"       element={<AboutPage />}  />
      <Route path="/demo"   element={<DemoLogin />}  />
      <Route path="/demo/*" element={<DemoShell />}  />
      <Route path="*"       element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
