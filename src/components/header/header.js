import React from 'react';
import 'styled-components/macro';
import { Header as GrommetHeader } from 'grommet';

import NavBar from '../navbar';
import { Logo } from './header-components';

const Header = () => {
  return (
    <GrommetHeader
      background="custom-primary"
      align="center"
      css={`
        grid-area: header;
      `}
    >
      <Logo />
      <NavBar />
    </GrommetHeader>
  );
};

export default Header;
