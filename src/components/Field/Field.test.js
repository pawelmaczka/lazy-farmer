import React from 'react';
import { render, act } from '@testing-library/react';
import 'jest-styled-components';

import Field from './Field';
import * as getFieldImage from './getFieldImage';
import * as helpers from './helpers';

jest.mock('firebase', () => ({
  functions: jest.fn(() => ({
    httpsCallable: jest.fn(() => () => {}),
  })),
}));

const field1 = {
  id: 1,
  plantedAtTimestamp: 20,
  type: 'cabbage',
};

const field2 = {
  id: 1,
  plantedAtTimestamp: null,
  type: 'tomato',
};

jest.useFakeTimers();

describe('Field', () => {
  it('renders proper image depending on type of field', async () => {
    const getFieldImageImplementation = (type) => () => <div>{type}</div>;
    const getFieldImageMock = jest
      .spyOn(getFieldImage, 'getFieldImage')
      .mockImplementation(getFieldImageImplementation);

    const { queryByText: queryByText1 } = render(<Field field={field1} />);
    const { queryByText: queryByText2 } = render(<Field field={field2} />);

    const renderedField1 = queryByText1('cabbage');
    const renderedField2 = queryByText2('tomato');

    expect(renderedField1).toBeInTheDocument();
    expect(renderedField2).toBeInTheDocument();

    getFieldImageMock.mockRestore();
  });

  it('renders image without 70% grayscale filter if field is planted', () => {
    const { queryByTestId } = render(<Field field={field1} />);
    const svg = queryByTestId('svg-image');

    expect(svg).not.toHaveStyle('filter: grayscale(70%)');
  });

  it('renders image with 70% grayscale filter if field is not planted', () => {
    const { queryByTestId } = render(<Field field={field2} />);
    const svg = queryByTestId('svg-image');

    expect(svg).toHaveStyle('filter: grayscale(70%)');
  });

  it('renders proper image depending on time passed from plantedAtTimestamp and updates it in time', () => {
    const getFieldImageImplementation = (type, level) => () => (
      <div>level {level}</div>
    );

    const getFieldImageMock = jest
      .spyOn(getFieldImage, 'getFieldImage')
      .mockImplementation(getFieldImageImplementation);

    const getFieldLevelMock = jest
      .spyOn(helpers, 'getFieldLevel')
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 2);

    const { queryByText } = render(<Field field={field1} />);

    const initialField = queryByText('level 1');
    expect(initialField).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const updatedField = queryByText('level 2');
    expect(updatedField).toBeInTheDocument();

    getFieldImageMock.mockRestore();
    getFieldLevelMock.mockRestore();
  });
});
