import { DietitianProvider, UserProvider } from '../../contexts'
import { Footer, Layout, Main } from './app-components'
import { Route, Routes } from 'react-router'

import CreateMealPlan from '../../pages/dietitian/createMealPlan'
import Header from '../header'
import Home from '../../pages/home'
import React from 'react'
import { ThemeContext } from 'grommet'
import { themes } from '../../contexts/theme-context'

const App = () => {
  return (
    <ThemeContext.Extend value={themes}>
      <DietitianProvider>
        <UserProvider>
          <Layout>
            <Header />
            <Main>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dietitian' element={<CreateMealPlan />} />
              </Routes>
            </Main>
            <Footer />
          </Layout>
        </UserProvider>
      </DietitianProvider>
    </ThemeContext.Extend>
  )
}

export default App
