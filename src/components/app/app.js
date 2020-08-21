import { DietitianProvider, UserProvider } from '../../contexts'
import { Footer, Layout, Main } from './app-components'

import AppRoutes from '../../routes'
import CreateMealPlan from '../../pages/dietitian/create-meal-plan'
import Dietitian from '../../pages/dietitian'
import Header from '../header'
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
              <AppRoutes />
            </Main>
            <Footer />
          </Layout>
        </UserProvider>
      </DietitianProvider>
    </ThemeContext.Extend>
  )
}

export default App
