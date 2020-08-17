import { Anchor, Button, Header as GrommetHeader, Menu, Text } from 'grommet';

import { Home } from 'grommet-icons';
import React from 'react';

const Header = () => {
  return (
    <GrommetHeader background="brand">
      <Button icon={<Home />} hoverIndicator />
      <Text>Healthy Buddy</Text>
      <Menu label="account" items={[{ label: 'logout' }]} />
    </GrommetHeader>
  );
};

export default Header;
