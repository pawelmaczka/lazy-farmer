import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { FaPlay } from 'react-icons/fa';

import { AuthContext } from 'services/auth';
import * as ROUTES from 'constants/routes';
import device from 'styles/device';
import Logo from 'components/Logo';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: 0;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  position: relative;
  width: 100%;
`;

const PlayButtonWrapper = styled.div`
  background-color: white;
  width: 100%;
`;

const PlayButton = styled(Button)`
  font-size: 2rem;
  width: 100%;

  @media ${device.mobileL} {
    width: 40.5rem;
  }
`;

const LogInButtonAnimation = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(100% + 1.5rem));
  }
`;

const LogInButton = styled(PlayButton)`
  font-size: 2rem;
  text-transform: none;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  animation: ${LogInButtonAnimation} 0.7s;
  animation-fill-mode: forwards;
`;

const Landing = () => {
  const [showLogInButton, setShowLogInButton] = React.useState(false);
  const { user } = React.useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  const [isShowingLoginError, setIsShowingLoginError] = React.useState(
    location.state?.isLogInError ?? false
  );

  const handlePlay = React.useCallback(() => {
    if (user) {
      history.push(ROUTES.GAME);
    } else {
      setShowLogInButton(true);
    }
  }, [user, showLogInButton]);

  const handleLogIn = React.useCallback(() => {
    history.push(ROUTES.LOGIN);
  });

  const handleCloseSnackbar = React.useCallback(() => {
    setIsShowingLoginError(false);
  }, []);

  return (
    <Main>
      <Header>
        <Logo />
      </Header>
      <Buttons>
        <PlayButtonWrapper>
          <PlayButton
            variant="contained"
            color="primary"
            size="large"
            startIcon={<FaPlay />}
            onClick={handlePlay}
            disabled={showLogInButton}
          >
            Play!
          </PlayButton>
        </PlayButtonWrapper>
        {showLogInButton && (
          <LogInButton
            variant="contained"
            size="large"
            color="primary"
            onClick={handleLogIn}
          >
            Log in with Google
          </LogInButton>
        )}
      </Buttons>
      <Snackbar
        open={isShowingLoginError}
        autoHideDuration={10000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="error"
          variant="filled"
        >
          This is a success message!
        </MuiAlert>
      </Snackbar>
    </Main>
  );
};

export default Landing;
