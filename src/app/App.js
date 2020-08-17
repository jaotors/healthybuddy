import { Route, Routes } from 'react-router'

import Header from '../common/Header'
import Home from '../pages/Home'
import React from 'react'
function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
