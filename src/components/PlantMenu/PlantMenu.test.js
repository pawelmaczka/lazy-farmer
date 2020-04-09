import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PlantMenu from './PlantMenu';

describe('PlantMenu', () => {
  it('calls onPlant with "carrot" when clicking the carrot icon', () => {
    const handlePlant = jest.fn();

    const { queryByTestId } = render(
      <PlantMenu onPlant={handlePlant} onClose={() => {}} open />
    );
    const carrotIcon = queryByTestId('plant-carrot-icon');

    fireEvent.click(carrotIcon);
    expect(handlePlant).toBeCalledWith('carrot');
  });

  it('calls onPlant with "cabbage" when clicking the cabbage icon', () => {
    const handlePlant = jest.fn();

    const { queryByTestId } = render(
      <PlantMenu onPlant={handlePlant} onClose={() => {}} open />
    );
    const cabbageIcon = queryByTestId('plant-cabbage-icon');

    fireEvent.click(cabbageIcon);
    expect(handlePlant).toBeCalledWith('cabbage');
  });

  it('calls onPlant with "potato" when clicking the potato icon', () => {
    const handlePlant = jest.fn();

    const { queryByTestId } = render(
      <PlantMenu onPlant={handlePlant} onClose={() => {}} open />
    );
    const potatoIcon = queryByTestId('plant-potato-icon');

    fireEvent.click(potatoIcon);
    expect(handlePlant).toBeCalledWith('potato');
  });

  it('calls onPlant with "pumpkin" when clicking the pumpkin icon', () => {
    const handlePlant = jest.fn();

    const { queryByTestId } = render(
      <PlantMenu onPlant={handlePlant} onClose={() => {}} open />
    );
    const pumpkinIcon = queryByTestId('plant-pumpkin-icon');

    fireEvent.click(pumpkinIcon);
    expect(handlePlant).toBeCalledWith('pumpkin');
  });

  it('calls onPlant with "tomato" when clicking the tomato icon', () => {
    const handlePlant = jest.fn();

    const { queryByTestId } = render(
      <PlantMenu onPlant={handlePlant} onClose={() => {}} open />
    );
    const tomatoIcon = queryByTestId('plant-tomato-icon');

    fireEvent.click(tomatoIcon);
    expect(handlePlant).toBeCalledWith('tomato');
  });

  it('calls onClose when clicking any of icons', () => {
    const handleClose = jest.fn();

    const { queryByTestId } = render(
      <PlantMenu onPlant={() => {}} onClose={handleClose} open />
    );

    const tomatoIcon = queryByTestId('plant-tomato-icon');
    const cabbageIcon = queryByTestId('plant-cabbage-icon');
    fireEvent.click(tomatoIcon);
    fireEvent.click(cabbageIcon);

    expect(handleClose).toBeCalledTimes(2);
  });
});
