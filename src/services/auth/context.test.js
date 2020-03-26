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
          {({ currentUser: user }) => {
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

  test('isAuthChecked initial value is false', () => {
    let isAuthChecked;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ isAuthChecked: isChecked }) => {
            isAuthChecked = isChecked;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(isAuthChecked).toBe(false);
  });

  test('isAuthChecked is true if auth state changed', () => {
    let isAuthChecked;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ isAuthChecked: isChecked }) => {
            isAuthChecked = isChecked;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    act(() => {
      onAuthStateChanged('Test User');
    });

    expect(isAuthChecked).toBe(true);
  });
});
