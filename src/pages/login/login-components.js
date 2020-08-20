import React, { useState } from 'react';
import { Box, Form, FormField, TextInput, Heading } from 'grommet';
import Button from '../../components/button';
import 'styled-components/macro';

export const LoginForm = ({ onClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      direction="column"
      border="all"
      css={`
        width: 100%;
        border-radius: 15px;
        padding: 20px;
      `}
    >
      <Heading margin="small" alignSelf="center" color="custom-text">
        Login
      </Heading>
      <Form>
        <FormField label="Email">
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </FormField>
        <FormField label="Password">
          <TextInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </FormField>
        <Box
          align="center"
          justify="center"
          css={`
            margin-top: 20px;
          `}
        >
          <Button
            label="Login"
            css={`
              width: 80%;
            `}
            onClick={() => onClick({ email, password })}
          />
        </Box>
      </Form>
    </Box>
  );
};
