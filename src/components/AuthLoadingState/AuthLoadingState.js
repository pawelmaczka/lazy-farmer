import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from 'services/auth';

const AuthLoadingState = ({ children }) => {
  const { isAuthStatusKnown } = useContext(AuthContext);

  return isAuthStatusKnown ? (
    children
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

AuthLoadingState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLoadingState;
