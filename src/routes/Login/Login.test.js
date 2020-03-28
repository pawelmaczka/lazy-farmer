import React from 'react';
import { render, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import { AuthContext } from 'services/auth';
import * as ROUTES from 'constants/routes';
import fire from 'services/firebase';
import Login from './Login';

const fakeUser = {
  username: 'Fake user',
};

jest.mock('services/firebase', () => {
  return {
    auth: jest.fn(),
  };
});

describe('Login', () => {
  it('redirects to /game if user is already logged in', async () => {
    let currentLocation;

    fire.auth.mockImplementation(() => ({
      getRedirectResult: jest.fn(() => Promise.resolve()),
      signInWithRedirect: jest.fn(),
    }));

    await act(async () => {
      render(
        <AuthContext.Provider value={{ user: fakeUser }}>
          <MemoryRouter initialEntries={[ROUTES.LOGIN]}>
            <Login />
            <Route
              path="*"
              render={({ location }) => {
                currentLocation = location;
                return null;
              }}
            />
          </MemoryRouter>
        </AuthContext.Provider>
      );
    });

    expect(currentLocation.pathname).toEqual(ROUTES.GAME);
  });

  it('redirects to / with state.isLogInError = true if there is an error when logging', async () => {
    fire.auth.mockImplementation(() => ({
      getRedirectResult: jest.fn(() => Promise.reject()),
      signInWithRedirect: jest.fn(),
    }));

    let currentLocation;

    await act(async () => {
      render(
        <AuthContext.Provider value={{ user: null }}>
          <MemoryRouter
            initialEntries={[
              {
                pathname: ROUTES.LOGIN,
              },
            ]}
          >
            <Login />
            <Route
              path="*"
              render={({ location }) => {
                currentLocation = location;
                return null;
              }}
            />
          </MemoryRouter>
        </AuthContext.Provider>
      );
    });

    expect(currentLocation.pathname).toEqual(ROUTES.LANDING);
  });

  it('uses google signInWithRedirect if user is not logged in', async () => {
    const signInWithRedirect = jest.fn();

    fire.auth.mockImplementation(() => ({
      getRedirectResult: jest.fn(() => Promise.resolve()),
      signInWithRedirect,
    }));

    await act(async () => {
      render(
        <AuthContext.Provider value={{ user: null }}>
          <MemoryRouter initialEntries={[ROUTES.LOGIN]}>
            <Login />
          </MemoryRouter>
        </AuthContext.Provider>
      );
    });

    expect(signInWithRedirect).toBeCalled();
  });

  it('does not use google signInWithRedirect if user is logged in', async () => {
    const signInWithRedirect = jest.fn();

    fire.auth.mockImplementation(() => ({
      getRedirectResult: jest.fn(() => Promise.resolve()),
      signInWithRedirect,
    }));

    await act(async () => {
      render(
        <AuthContext.Provider value={{ user: fakeUser }}>
          <MemoryRouter initialEntries={[ROUTES.LOGIN]}>
            <Login />
          </MemoryRouter>
        </AuthContext.Provider>
      );
    });

    expect(signInWithRedirect).not.toBeCalled();
  });

  it('renders loading screen in all other cases', async () => {
    fire.auth.mockImplementation(() => ({
      getRedirectResult: jest.fn(() => Promise.resolve()),
      signInWithRedirect: jest.fn(),
    }));

    let queryByTestId;

    await act(async () => {
      const { queryByTestId: queryById } = render(
        <AuthContext.Provider value={{ user: null }}>
          <MemoryRouter initialEntries={[ROUTES.LOGIN]}>
            <Login />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      queryByTestId = queryById;
    });

    const loadingScreen = queryByTestId(/loading-screen/i);
    expect(loadingScreen).toBeInTheDocument();
  });
});
