import { Route, Routes } from 'react-router'

import CreateMealPlan from './pages/dietitian/create-meal-plan'
import Customer from './pages/customer'
import Dietitian from './pages/dietitian'
import Home from './pages/home'
import Login from './pages/login'
import React from 'react'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/customer' element={<Customer />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dietitian' element={<Dietitian />} />
      <Route path='/create-meal-plan' element={<CreateMealPlan />} />
    </Routes>
  )
}

export default AppRoutes
