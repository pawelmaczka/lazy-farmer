import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from 'services/auth';

import LoadingScreen from 'components/LoadingScreen';

const AuthLoadingState = ({ children }) => {
  const { isAuthStatusKnown } = useContext(AuthContext);

  return isAuthStatusKnown ? children : <LoadingScreen />;
};

AuthLoadingState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLoadingState;
