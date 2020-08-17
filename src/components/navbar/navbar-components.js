import { Anchor } from 'grommet';
import styled from 'styled-components/macro';

export const NavAnchor = styled(Anchor)`
  color: #fff;
  text-decoration: none;
  padding: 19px 15px;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    box-shadow: inset 0px -4px 0px 0px #81fced;
    text-decoration: none;
  }
`;
