import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ResourtceCounter from 'components/ResourceCounter';

import fire from 'services/firebase';

const Resources = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
`;

const StyledToolbar = styled(Toolbar)`
  background: #96a646;
  height: 10rem;
`;

const StyledButton = styled(Button)`
  white-space: nowrap;
`;

const GameBar = ({ resources }) => {
  const logOut = React.useCallback(() => {
    fire.auth().signOut();
  }, []);

  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Resources>
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
          </Resources>
          <StyledButton
            variant="outlined"
            size="large"
            color="inherit"
            onClick={logOut}
          >
            Log out
          </StyledButton>
        </StyledToolbar>
      </AppBar>
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
