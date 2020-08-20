import { Layout, Main, Footer } from './app-components';
import React from 'react';
import { ThemeContext } from 'grommet';

import Header from '../header';
import { UserProvider, DietitianProvider } from '../../contexts';
import { themes } from '../../contexts/theme-context';
import AppRoutes from '../../routes';

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
  );
};

export default App;
