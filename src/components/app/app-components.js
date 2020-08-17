import styled from 'styled-components/macro';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'main';
  height: 100%;
`;

export const Main = styled.div`
  grid-area: main;
  padding: 10px;
`;
