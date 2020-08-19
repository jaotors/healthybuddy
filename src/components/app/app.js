import { Footer, Layout, Main } from './app-components'
import { Route, Routes } from 'react-router'

import Header from '../header'
import Home from '../../pages/home'
import React from 'react'
import { ThemeContext } from 'grommet'
import { UserProvider } from '../../contexts/user-context'
import { themes } from '../../contexts/theme-context'

const App = () => {
  return (
    <ThemeContext.Extend value={themes}>
      <UserProvider>
        <Layout>
          <Header />
          <Main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/meal' element={<CreateMealPlan />} />
            </Routes>
          </Main>
          <Footer />
        </Layout>
      </UserProvider>
    </ThemeContext.Extend>
  )
}

export default App
