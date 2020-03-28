import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import { AuthContext } from 'services/auth';
import * as ROUTES from 'constants/routes';
import Landing from './Landing';

const fakeUser = {
  username: 'Fake user',
};

describe('Landing', () => {
  it('renders logo', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter
          initialEntries={[
            {
              path: ROUTES.LANDING,
            },
          ]}
        >
          <Landing />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoText = queryByText(/lazy-farmer/i);
    expect(logoText).toBeInTheDocument();
  });

  it('renders play button', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter
          initialEntries={[
            {
              path: ROUTES.LANDING,
            },
          ]}
        >
          <Landing />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const playButton = queryByText(/play/i);
    expect(playButton).toBeInTheDocument();
  });

  it('does not render "Log in with Google" button if user has not clicked "Play" button', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter
          initialEntries={[
            {
              path: ROUTES.LANDING,
            },
          ]}
        >
          <Landing />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logInButton = queryByText(/Log in with Google/i);
    expect(logInButton).not.toBeInTheDocument();
  });

  it('redirects to "/game" if logged in user clicks "play" button', () => {
    let currentLocation;

    const { queryByText } = render(
      <AuthContext.Provider value={{ user: fakeUser }}>
        <MemoryRouter
          initialEntries={[
            {
              path: ROUTES.LANDING,
            },
          ]}
        >
          <Route path={ROUTES.LANDING}>
            <Landing />
          </Route>
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

    const playButton = queryByText(/play/i);
    fireEvent.click(playButton);

    expect(currentLocation.pathname).toEqual(ROUTES.GAME);
  });

  it('renders "Log in with Google" button if not logged in user clicks "play" button', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter
          initialEntries={[
            {
              path: ROUTES.LANDING,
            },
          ]}
        >
          <Landing />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const playButton = queryByText(/play/i);
    fireEvent.click(playButton);

    const logInButton = queryByText(/Log in with Google/i);
    expect(logInButton).toBeInTheDocument();
  });

  it('redirects to "/login" if not logged in user clicks "Log in with Google" button', () => {
    let currentLocation;

    const { queryByText } = render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter
          initialEntries={[
            {
              path: ROUTES.LANDING,
            },
          ]}
        >
          <Route path={ROUTES.LANDING}>
            <Landing />
          </Route>
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

    const playButton = queryByText(/play/i);
    fireEvent.click(playButton);
    const logInButton = queryByText(/Log in with Google/i);
    fireEvent.click(logInButton);

    expect(currentLocation.pathname).toEqual(ROUTES.LOGIN);
  });

  test('"play" button is disabled after clicking it by not logged in user', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter
          initialEntries={[
            {
              path: ROUTES.LANDING,
            },
          ]}
        >
          <Landing />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const playButton = queryByText(/play/i);
    fireEvent.click(playButton);

    expect(playButton).toBeDisabled();
  });

  it('shows error message if there is a problem logging in the user', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter
          initialEntries={[
            {
              path: ROUTES.LANDING,
              state: {
                isLogInError: true,
              },
            },
          ]}
        >
          <Landing />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const errorMessage = queryByText(/Something went wrong/i);

    expect(errorMessage).toBeInTheDocument();
  });
});
