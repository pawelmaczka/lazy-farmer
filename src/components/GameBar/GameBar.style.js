import styled from 'styled-components/macro';

import MuiToolbar from '@material-ui/core/Toolbar';
import MuiButton from '@material-ui/core/Button';

export const Resources = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const Toolbar = styled(MuiToolbar)`
  background: #96a646;
  height: 10rem;
`;

export const Button = styled(MuiButton)`
  white-space: nowrap;
`;
