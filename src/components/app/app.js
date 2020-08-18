import { Layout, Main, Footer } from './app-components';
import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router';

import Header from '../header';
import Home from '../../pages/home';
import { UserProvider } from '../../contexts/user-context';
import { decodeUserJWT } from '../../utils/user';

const App = () => {
  return (
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
  );
};

export default App;
