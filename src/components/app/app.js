import { Layout, Main, Footer } from './app-components';
import React from 'react';
import { Route, Routes } from 'react-router';
import { ThemeContext } from 'grommet';

import Header from '../header';
import Home from '../../pages/home';
import { UserProvider } from '../../contexts/user-context';
import { themes } from '../../contexts/theme-context';

const App = () => {
  return (
    <ThemeContext.Extend value={themes}>
      <UserProvider>
        <Layout>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Main>
          <Footer />
        </Layout>
      </UserProvider>
    </ThemeContext.Extend>
  );
};

export default App;
