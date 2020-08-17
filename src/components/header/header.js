import { Header as GrommetHeader, Nav, Text } from 'grommet';
import React from 'react';
// don't remove the styled-components/macro
// its the way we can use css={``} in a component
import styled from 'styled-components/macro';
import NavBar from '../navbar';

const Header = () => {
  return (
    <GrommetHeader
      background="brand"
      align="center"
      css={`
        grid-area: header;
      `}
    >
      <div
        className="logodito"
        css={`
          padding: 15px;
          cursor: default;
        `}
      >
        <Text size="large" weight="bold">
          Healthy Buddy
        </Text>
      </div>
      <NavBar />
    </GrommetHeader>
  );
};

export default Header;
