import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from 'services/auth';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import fire from 'services/firebase';
import * as ROUTES from 'constants/routes';

import LoadingScreen from 'components/LoadingScreen';

const Login = () => {
  const { user } = useContext(AuthContext);
  const [isLogInError, setIsLogInError] = useState(false);

  useEffect(() => {
    fire
      .auth()
      .getRedirectResult()
      // eslint-disable-next-line consistent-return
      .then(() => {
        if (!user) {
          const provider = new firebase.auth.GoogleAuthProvider();
          return fire.auth().signInWithRedirect(provider);
        }
      })
      .catch(() => {
        setIsLogInError(true);
      });
  }, []);

  if (isLogInError) {
    return (
      <Redirect
        to={{
          pathname: ROUTES.LANDING,
          state: {
            isLogInError: true,
          },
        }}
      />
    );
  }

  if (user) {
    return <Redirect to={ROUTES.GAME} />;
  }

  return <LoadingScreen />;
};

export default Login;
