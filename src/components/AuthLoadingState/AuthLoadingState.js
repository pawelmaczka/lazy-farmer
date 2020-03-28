import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from 'services/auth';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components/macro';

const LoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const AuthLoadingState = ({ children }) => {
  const { isAuthStatusKnown } = useContext(AuthContext);

  return isAuthStatusKnown ? (
    children
  ) : (
    <LoadingScreen data-testid="loading-screen">
      <CircularProgress />
    </LoadingScreen>
  );
};

AuthLoadingState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLoadingState;
