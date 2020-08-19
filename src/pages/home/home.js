import React, { useState } from 'react';
import { Box, Heading, Button } from 'grommet';
import styled from 'styled-components/macro';

const INITIAL_DATA = {
  goal: '',
  dietritian: -1,
  info: {
    firstname: '',
    lastname: '',
    minitial: '',
    contactnum: '',
    gender: -1,
  },
};

const Home = () => {
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState(INITIAL_DATA);

  return (
    <Box direction="column">
      <Heading
        textAlign="center"
        color="custom-text"
        css={`
          font-size: 120px;
          line-height: inherit;
          margin-bottom: 50px;
        `}
        margin="none"
      >
        Be the Best Version of You
      </Heading>
      <Button
        label="Get Started"
        color="custom-primary"
        primary
        css={`
          width: 35%;
          margin: auto;
          font-size: 35px;
          padding: 20px;
          font-weight: bold;
          color: #444;
        `}
      />
    </Box>
  );
};

export default Home;
