import React from 'react';
import { render, act } from '@testing-library/react';
import { AuthProvider, AuthContext } from 'services/auth';

let onAuthStateChanged;

jest.mock('services/firebase', () => {
  return {
    auth: () => ({
      onAuthStateChanged: (callback) => {
        onAuthStateChanged = callback;
      },
    }),
  };
});

describe('AuthProvider', () => {
  it('provides initial null value for currentUser', () => {
    let currentUser;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ currentUser: user }) => {
            currentUser = user;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(currentUser).toBeNull();
  });

  it('provides updated currentUser object after if auth state changes', () => {
    let currentUser;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ currentUser: user }) => {
            currentUser = user;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    act(() => {
      onAuthStateChanged('Test User');
    });

    expect(currentUser).toEqual('Test User');
  });
});
