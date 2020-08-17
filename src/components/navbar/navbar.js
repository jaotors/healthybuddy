import React from 'react';
import { Nav, Box } from 'grommet';
import { NavAnchor } from './navbar-components';

const NavBar = () => (
  <Box direction="row">
    <NavAnchor href="/">Home</NavAnchor>
    <NavAnchor href="/whoarwe">Who are We?</NavAnchor>
    <NavAnchor href="/pricing">Pricing</NavAnchor>
    <NavAnchor href="/login">Login</NavAnchor>
  </Box>
);

export default NavBar;
