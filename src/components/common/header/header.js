import { Anchor, Button, Header, Menu, Text } from './node_modules/grommet'

import { Home } from './node_modules/grommet-icons'
import React from './node_modules/react'

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
