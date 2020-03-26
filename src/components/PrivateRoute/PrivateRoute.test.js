import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import { AuthContext } from 'services/auth';
import * as ROUTES from 'constants/routes';
import PrivateRoute from './PrivateRoute';

describe('PrivateRoute', () => {
  it('renders children component if user is logged in', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ user: { username: 'Test User' } }}>
        <MemoryRouter initialEntries={[ROUTES.GAME]}>
          <PrivateRoute path={ROUTES.GAME}>
            <div>Private</div>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const privateComponent = queryByText(/private/i);
    expect(privateComponent).toBeInTheDocument();
  });

  it('does not render children component if user is logged out', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter initialEntries={[ROUTES.GAME]}>
          <PrivateRoute path={ROUTES.GAME}>
            <div>Private</div>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const privateComponent = queryByText(/private/i);
    expect(privateComponent).toBeNull();
  });

  it('redirects to landing page if user is not logged in', () => {
    let currentLocation;

    render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter initialEntries={[ROUTES.GAME]}>
          <PrivateRoute path={ROUTES.GAME}>
            <div>Private</div>
          </PrivateRoute>
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

    expect(currentLocation.pathname).toEqual(ROUTES.LANDING);
  });
});
