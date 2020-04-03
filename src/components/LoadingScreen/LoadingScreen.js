import React from 'react';
import { CircularProgress as MuiCircularProgress } from '@material-ui/core';

import * as Styled from './LoadingScreen.style';

const LoadingScreen = () => (
  <Styled.StyledLoadingScreen data-testid="loading-screen">
    <MuiCircularProgress />
  </Styled.StyledLoadingScreen>
);

export default LoadingScreen;
