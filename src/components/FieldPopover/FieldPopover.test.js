import React from 'react';
import { render } from '@testing-library/react';

import FieldPopover from './FieldPopover';

describe('FieldPopover', () => {
  it('renders children when opened', () => {
    const { queryByText } = render(
      <FieldPopover open onClose={() => {}}>
        Child
      </FieldPopover>
    );

    const child = queryByText(/Child/);
    expect(child).toBeInTheDocument();
  });

  it('does not render children when closed', () => {
    const { queryByText } = render(
      <FieldPopover open={false} onClose={() => {}}>
        Child
      </FieldPopover>
    );

    const child = queryByText(/Child/);
    expect(child).not.toBeInTheDocument();
  });
});
