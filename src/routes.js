import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/home';
import Customer from './pages/customer';
import Login from './pages/login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
