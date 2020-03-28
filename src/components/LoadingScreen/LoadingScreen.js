import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components/macro';

const StyledLoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const LoadingScreen = () => (
  <StyledLoadingScreen data-testid="loading-screen">
    <CircularProgress />
  </StyledLoadingScreen>
);

export default LoadingScreen;
