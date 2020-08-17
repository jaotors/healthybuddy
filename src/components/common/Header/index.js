import { Anchor, Button, Header, Menu, Text } from 'grommet'

import { Home } from 'grommet-icons'
import React from 'react'

const NavBar = () => {
  return (
    <Header background='brand'>
      <Button icon={<Home />} hoverIndicator />
      <Text>Healthy Buddy</Text>
      <Menu label='account' items={[{ label: 'logout' }]} />
    </Header>
  )
}

export default NavBar
