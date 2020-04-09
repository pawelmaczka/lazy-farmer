import React from 'react';
import PropTypes from 'prop-types';

import FieldPopover from 'components/FieldPopover';
import { ReactComponent as Pumpkin } from 'assets/images/pumpkin.svg';
import { ReactComponent as Cabbage } from 'assets/images/cabbage.svg';
import { ReactComponent as Carrot } from 'assets/images/carrot.svg';
import { ReactComponent as Potato } from 'assets/images/potato.svg';
import { ReactComponent as Tomato } from 'assets/images/tomato.svg';

import * as Styled from './PlantMenu.style';

const PlantMenu = ({ onPlant, anchorEl, onClose, open }) => {
  const handlePlantCarrot = React.useCallback(() => {
    onPlant('carrot');
    onClose();
  }, [onPlant, onClose]);

  const handlePlantCabbage = React.useCallback(() => {
    onPlant('cabbage');
    onClose();
  }, [onPlant, onClose]);

  const handlePlantPotato = React.useCallback(() => {
    onPlant('potato');
    onClose();
  }, [onPlant, onClose]);

  const handlePlantPumpkin = React.useCallback(() => {
    onPlant('pumpkin');
    onClose();
  }, [onPlant, onClose]);

  const handlePlantTomato = React.useCallback(() => {
    onPlant('tomato');
    onClose();
  }, [onPlant, onClose]);

  return (
    <FieldPopover open={open} anchorEl={anchorEl} onClose={onClose}>
      <Styled.Container>
        <Styled.Wrapper>
          <Carrot onClick={handlePlantCarrot} data-testid="plant-carrot-icon" />
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Cabbage
            onClick={handlePlantCabbage}
            data-testid="plant-cabbage-icon"
          />
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Potato onClick={handlePlantPotato} data-testid="plant-potato-icon" />
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Pumpkin
            onClick={handlePlantPumpkin}
            data-testid="plant-pumpkin-icon"
          />
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Tomato onClick={handlePlantTomato} data-testid="plant-tomato-icon" />
        </Styled.Wrapper>
      </Styled.Container>
    </FieldPopover>
  );
};

PlantMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  anchorEl: PropTypes.object,
  onPlant: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default PlantMenu;
