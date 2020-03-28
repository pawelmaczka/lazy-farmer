import React from 'react';
import { render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo', () => {
  it('renders properly', () => {
    render(<Logo />);
  });
});
