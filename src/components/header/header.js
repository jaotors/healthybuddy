import { Header as GrommetHeader, Text } from 'grommet';
import React from 'react';
// don't remove the styled-components/macro
// its the way we can use css={``} in a component
import styled from 'styled-components/macro';
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
