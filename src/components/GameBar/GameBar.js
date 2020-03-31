import React from 'react';
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

const GameBar = () => {
  const logOut = React.useCallback(() => {
    fire.auth().signOut();
  }, []);

  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Resources>
            <ResourtceCounter resource="cabbage" amount={20} />
            <ResourtceCounter resource="carrot" amount={20} />
            <ResourtceCounter resource="potato" amount={20} />
            <ResourtceCounter resource="pumpkin" amount={20} />
            <ResourtceCounter resource="tomato" amount={20} />
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

export default GameBar;
