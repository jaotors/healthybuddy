import { Anchor } from 'grommet';
import styled from 'styled-components/macro';

export const NavAnchor = styled(Anchor)`
  color: #444;
  text-decoration: none;
  padding: 19px 15px;
  text-align: center;
  transition: all 0.3s;
  ${(props) => props.active && `box-shadow: inset 0px -4px 0px 0px #00008b;`}

  &:hover {
    box-shadow: inset 0px -4px 0px 0px #00008b;
    text-decoration: none;
  }
`;
