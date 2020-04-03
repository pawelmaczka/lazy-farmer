import React from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@material-ui/core/AppBar';

import fire from 'services/firebase';

import ResourtceCounter from 'components/ResourceCounter';
import * as Styled from './GameBar.style';

const GameBar = ({ resources }) => {
  const logOut = React.useCallback(() => {
    fire.auth().signOut();
  }, []);

  return (
    <div>
      <MuiAppBar position="static">
        <Styled.Toolbar>
          <Styled.Resources>
            <ResourtceCounter
              resource="cabbage"
              amount={resources?.cabbage ?? 0}
            />
            <ResourtceCounter
              resource="carrot"
              amount={resources?.carrot ?? 0}
            />
            <ResourtceCounter
              resource="potato"
              amount={resources?.potato ?? 0}
            />
            <ResourtceCounter
              resource="pumpkin"
              amount={resources?.pumpkin ?? 0}
            />
            <ResourtceCounter
              resource="tomato"
              amount={resources?.tomato ?? 0}
            />
          </Styled.Resources>
          <Styled.Button
            variant="outlined"
            size="large"
            color="inherit"
            onClick={logOut}
          >
            Log out
          </Styled.Button>
        </Styled.Toolbar>
      </MuiAppBar>
    </div>
  );
};

GameBar.propTypes = {
  resources: PropTypes.shape({
    cabbage: PropTypes.number.isRequired,
    carrot: PropTypes.number.isRequired,
    potato: PropTypes.number.isRequired,
    pumpkin: PropTypes.number.isRequired,
    tomato: PropTypes.number.isRequired,
  }).isRequired,
};

export default GameBar;
