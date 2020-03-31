import React from 'react';
import styled from 'styled-components/macro';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import fire from 'services/firebase';

const Resources = styled.div`
  flex-grow: 1;
`;

const StyledToolbar = styled(Toolbar)`
  background: #96a646;
  height: 10rem;
`;

const GameBar = () => {
  const logOut = React.useCallback(() => {
    fire.auth().signOut();
  }, []);

  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Resources />
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            onClick={logOut}
          >
            Log out
          </Button>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default GameBar;
