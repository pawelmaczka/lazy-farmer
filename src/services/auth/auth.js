/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import fire from 'services/firebase';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuthStatusKnown, setIsAuthStatusKnown] = React.useState(false);

  React.useEffect(() => {
    fire.auth().onAuthStateChanged((value) => {
      setUser(value);
      setIsAuthStatusKnown(true);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthStatusKnown,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
