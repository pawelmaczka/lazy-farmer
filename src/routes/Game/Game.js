import React from 'react';
import styled from 'styled-components/macro';
import PotatoField from 'components/PotatoField';
import PumpkinField from 'components/PumpkinField';
import CarrotField from 'components/CarrotField';
import CabbageField from 'components/CabbageField';

const StyledGame = styled.div`
  background-color: #85a600;
`;

const Game = () => {
  return (
    <StyledGame>
      <div>
        <PotatoField />
        <PumpkinField />
        <CarrotField />
        <CabbageField />
      </div>
    </StyledGame>
  );
};

export default Game;
