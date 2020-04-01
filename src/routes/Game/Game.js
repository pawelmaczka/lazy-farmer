import React from 'react';
import styled from 'styled-components/macro';
import fire from 'services/firebase';
import LoadingScreen from 'components/LoadingScreen';
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

  return state.isDataFetched && state.farm ? (
    <StyledGame>
      <GameBar resources={state.farm.resources} />
      <GameArea>
        <Fields fields={state.farm.fields} />
      </GameArea>
    </StyledGame>
  ) : (
    <LoadingScreen />
  );
};

export default Game;
