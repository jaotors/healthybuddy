import React, { useState } from 'react';
import { Box } from 'grommet';
import 'styled-components/macro';

import * as Api from '../../api';
import { LoginForm } from './login-components';
import Loading from '../../components/loading';

const Login = () => {
  const [opened, setOpened] = useState();
  const onClick = async ({ email, password }) => {
    setOpened(true);
    try {
      const { data } = await Api.login({ email, password });
      localStorage.setItem()
    } catch (error) {
      setOpened(false)
    }
  };

  const onClose = () => {
    setOpened(false);
  };

  return (
    <>
      <Box
        direction="row"
        justify="center"
        alignContent="center"
        css={`
          width: 25%;
        `}
      >
        <LoginForm onClick={onClick} />
      </Box>
      {opened && <Loading onClose={onClose} />}
    </>
  );
};

export default Login;
