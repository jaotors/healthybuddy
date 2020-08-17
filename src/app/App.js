import { Route, Routes } from 'react-router'

import Header from '../components/common/Header'
import Home from '../components/pages/Home'
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
