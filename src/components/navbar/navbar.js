import React from 'react';
import { Box } from 'grommet';
import { NavAnchor } from './navbar-components';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const hasAccessToken = localStorage.getItem('access_token');

  const onClick = (path) => {
    if (path === '/logout') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_type');
      navigate('/');
      return;
    }

    navigate(path);
  };

  return (
    <Box direction="row">
      {!hasAccessToken && (
        <>
          <NavAnchor active={pathname === '/'} onClick={() => onClick('/')}>
            Home
          </NavAnchor>
          <NavAnchor
            active={pathname === '/whoarewe'}
            onClick={() => onClick('/whoarwe')}
          >
            Who are We?
          </NavAnchor>
        </>
      )}
      <NavAnchor
        active={pathname === '/login'}
        onClick={() => onClick(!hasAccessToken ? '/login' : '/logout')}
      >
        {!hasAccessToken ? 'Login' : 'Logout'}
      </NavAnchor>
    </Box>
  );
};

export default NavBar;
