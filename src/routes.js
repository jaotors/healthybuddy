import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/home';
import Customer from './pages/customer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
};

export default AppRoutes;
