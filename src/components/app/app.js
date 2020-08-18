import { Layout, Main } from './app-components'
import React, { useMemo, useState } from 'react'
import { Route, Routes } from 'react-router'

import Header from '../header'
import Home from '../../pages/home'
import { UserContext } from '../../store/UserContext'
import { decodeUserJWT } from '../../utils/user'

const App = () => {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <UserContext.Provider value={value}>
      <Layout>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Main>
      </Layout>
    </UserContext.Provider>
  )
}

export default App
