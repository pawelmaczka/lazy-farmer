import React from 'react';
import fire from 'services/firebase';

const Game = () => {
  const logOut = React.useCallback(() => {
    fire.auth().signOut();
  }, []);

  return (
    <div>
      Game
      <button type="button" onClick={logOut}>
        Log out
      </button>
    </div>
  );
};

export default Game;
