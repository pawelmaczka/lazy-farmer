import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'services/auth';
import * as ROUTES from 'constants/routes';

const PrivageRoute = ({ children, ...restProps }) => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <Route {...restProps}>
      {currentUser ? children : <Redirect to={ROUTES.LANDING} />}
    </Route>
  );
};

PrivageRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivageRoute;
