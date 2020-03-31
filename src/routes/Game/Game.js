import React from 'react';
import styled from 'styled-components/macro';
import fire from 'services/firebase';
import LoadingScreen from 'components/LoadingScreen';
import PotatoField from 'components/PotatoField';
import PumpkinField from 'components/PumpkinField';
import CarrotField from 'components/CarrotField';
import CabbageField from 'components/CabbageField';
import TomatoField from 'components/TomatoField';
import GameBar from 'components/GameBar';
import Fields from 'components/Fields';
import useGameReducer from './gameReducer';

const StyledGame = styled.div`
  background-color: #85a600;
  position: relative;
  width: 100%;
`;

const GameArea = styled.div`
  display: flex;
  justify-content: center;
`;

const Game = () => {
  const [state, actions] = useGameReducer();

  React.useEffect(() => {
    const unsubsribe = fire
      .firestore()
      .collection(`farms`)
      .doc(fire.auth().currentUser.uid)
      .onSnapshot((doc) => {
        actions.dataFetched(doc.data());
      });

    return () => {
      unsubsribe();
    };
  }, []);

  return state.isDataFetched ? (
    <StyledGame>
      <GameBar />
      <GameArea>
        <Fields>
          <PotatoField />
          <PumpkinField />
          <CarrotField />
          <CabbageField />
          <TomatoField />
          <TomatoField />
          <PotatoField />
          <PumpkinField />
          <CarrotField />
          <CabbageField />
          <TomatoField />
          <TomatoField />
          <PotatoField />
          <PumpkinField />
          <TomatoField />
          <CarrotField />
          <PotatoField />
          <PumpkinField />
          <TomatoField />
          <CarrotField />
        </Fields>
      </GameArea>
    </StyledGame>
  ) : (
    <LoadingScreen />
  );
};

export default Game;
