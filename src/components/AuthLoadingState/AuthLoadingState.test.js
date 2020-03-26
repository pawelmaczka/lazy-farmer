import React from 'react';
import { render } from '@testing-library/react';
import { AuthContext } from 'services/auth';
import AuthLoadingState from './AuthLoadingState';

describe('AuthLoadingState', () => {
  it('renders loading state if auth data is not fetched', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ isAuthStatusKnown: false }}>
        <AuthLoadingState>content</AuthLoadingState>
      </AuthContext.Provider>
    );

    const loadingState = queryByText(/loading/i);
    expect(loadingState).toBeInTheDocument();
  });

  it('renders children if auth data is fetched', () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{ isAuthStatusKnown: true }}>
        <AuthLoadingState>content</AuthLoadingState>
      </AuthContext.Provider>
    );

    const content = queryByText(/content/i);
    expect(content).toBeInTheDocument();
  });
});
