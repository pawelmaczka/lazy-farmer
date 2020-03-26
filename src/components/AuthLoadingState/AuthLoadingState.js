import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from 'services/auth';

const AuthLoadingState = ({ children }) => {
  const { isAuthChecked } = useContext(AuthContext);

  return isAuthChecked ? children : 'loading...';
};

AuthLoadingState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLoadingState;
