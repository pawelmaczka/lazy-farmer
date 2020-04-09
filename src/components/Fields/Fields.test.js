import React from 'react';
import { render } from '@testing-library/react';

import Fields from './Fields';
import { fields } from './fieldsMock';

jest.mock('components/Field', () => ({ field }) => (
  <div id={field.id}>Field</div>
));

describe('Fields', () => {
  it('renders 20 fields', () => {
    const { queryAllByText } = render(<Fields fields={fields} />);

    const renderedFields = queryAllByText(/Field/);

    expect(renderedFields).toHaveLength(20);
  });

  it('renders fields sorted by id asc', () => {
    const sortNumbers = (num1, num2) => num1 - num2;
    const { queryAllByText } = render(<Fields fields={fields} />);

    const fieldIds = queryAllByText(/Field/).map((field) =>
      Number(field.getAttribute('id'))
    );

    const sortedFieldIds = [...fieldIds].sort(sortNumbers);

    fieldIds.forEach((id, index) => {
      expect(id).toEqual(sortedFieldIds[index]);
    });
  });
});
