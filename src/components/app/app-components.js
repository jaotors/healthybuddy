import { Box, Text } from 'grommet';
import styled from 'styled-components/macro';
import React from 'react';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  height: 100%;
`;

export const Main = styled.div`
  grid-area: main;
  padding: 10px;
  display: grid;
  place-items: center;
`;

export const Footer = () => (
  <Box gridArea="footer" pad="small" background="light-6">
    <Text
      css={`
        font-size: 12px;
      `}
      alignSelf="center"
    >
      HealthyBuddy {new Date().getFullYear()}
    </Text>
  </Box>
);
