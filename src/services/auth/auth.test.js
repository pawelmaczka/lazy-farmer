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
  test('currentUser initial value is null', () => {
    let currentUser;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ user }) => {
            currentUser = user;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(currentUser).toBeNull();
  });

  test('currentUser value is updated after auth state change', () => {
    let currentUser;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ user }) => {
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

  test('isAuthStatusKnown initial value is false', () => {
    let isAuthStatusKnown;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ isAuthStatusKnown: isChecked }) => {
            isAuthStatusKnown = isChecked;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(isAuthStatusKnown).toBe(false);
  });

  test('isAuthStatusKnown is true if auth state changed', () => {
    let isAuthStatusKnown;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ isAuthStatusKnown: isChecked }) => {
            isAuthStatusKnown = isChecked;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    act(() => {
      onAuthStateChanged('Test User');
    });

    expect(isAuthStatusKnown).toBe(true);
  });
});
