import React from 'react';
import styled from 'styled-components/macro';
import { Text, Box } from 'grommet';
import LogoImg from '../../assets/images/app-logo.png';

export const Logo = () => (
  <Box direction="row" align="center">
    <div
      css={`
        cursor: default;
        padding-left: 15px;
        width: 40px;
        height: 40px;
        margin-right: 10px;
      `}
    >
      <img
        css={`
          height: 100%;
          width: 100%;
        `}
        src={LogoImg}
        alt="HealthyBuddy"
      />
    </div>
    <Text size="large" weight="bold">
      HealthyBuddy
    </Text>
  </Box>
);
