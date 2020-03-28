import React from 'react';
import { render } from '@testing-library/react';
import { AuthContext } from 'services/auth';
import LoadingScreen from './LoadingScreen';

describe('LoadingScreen', () => {
  it('renders properly', () => {
    const { queryByTestId } = render(
      <AuthContext.Provider value={{ isAuthStatusKnown: false }}>
        <LoadingScreen>content</LoadingScreen>
      </AuthContext.Provider>
    );

    const loadingState = queryByTestId('loading-screen');
    expect(loadingState).toBeInTheDocument();
  });
});
