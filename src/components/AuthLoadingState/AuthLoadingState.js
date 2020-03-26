import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from 'services/auth';

const AuthLoadingState = ({ children }) => {
  const { isAuthStatusKnown } = useContext(AuthContext);

  return isAuthStatusKnown ? children : 'loading...';
};

AuthLoadingState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLoadingState;
