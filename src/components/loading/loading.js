import React, { useState } from 'react';
import { Layer } from 'grommet';
import styled, { keyframes } from 'styled-components/macro';

const bounceDelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const Spinner = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;

  & div {
    width: 18px;
    height: 18px;

    border-radius: 100%;
    display: inline-block;
    background-color: #fff;
  }
`;

const BounceDiv = styled.div`
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.delay}s;
`;

const Loading = ({ onClose }) => {
  return (
    <Layer
      css={`
        background-color: transparent;
      `}
      onEsc={onClose}
      onClickOutside={onClose}
    >
      <Spinner>
        <BounceDiv delay={0.32} />
        <BounceDiv delay={0.16} />
        <BounceDiv delay={1.4} />
      </Spinner>
    </Layer>
  );
};

export default Loading;
