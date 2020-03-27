import React, { useCallback, useEffect, useContext, useState } from 'react';
import { AuthContext } from 'services/auth';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import fire from 'services/firebase';

import * as ROUTES from 'constants/routes';

const Login = () => {
  const { user } = useContext(AuthContext);
  const [isLogInError, setIsLogInError] = useState(false);

  useEffect(() => {
    fire
      .auth()
      .getRedirectResult()
      .then(() => {
        setIsLogInError(false);
      })
      .catch(() => {
        setIsLogInError(true);
      });
  }, []);

  const logIn = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    fire.auth().signInWithRedirect(provider);
  }, []);

  return user ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div>
      <h1>login</h1>
      {isLogInError && 'Nie udało się zalogować. Spróbuj jeszcze raz.'}
      <button type="button" onClick={logIn}>
        log in
      </button>
    </div>
  );
};

export default Login;
