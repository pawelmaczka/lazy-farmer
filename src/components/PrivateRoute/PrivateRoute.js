import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'services/auth';
import * as ROUTES from 'constants/routes';

const PrivateRoute = ({ children, ...restProps }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Route {...restProps}>
      {user ? children : <Redirect to={ROUTES.LANDING} />}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
