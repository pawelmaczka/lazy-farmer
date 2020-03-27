import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { FaPlay } from 'react-icons/fa';

import { AuthContext } from 'services/auth';
import * as ROUTES from 'constants/routes';
import farmer from 'assets/images/farmer.svg';
import device from 'styles/device';

const mobileLWidth = '40.5rem;';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 1rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 3rem;

  @media ${device.mobileL} {
    width: ${mobileLWidth};
  }
`;

const H1 = styled.h1`
  position: absolute;
  bottom: 2.5rem;
  margin: 0;
  font-size: 4.5rem;
  color: white;
  text-shadow: 0.2rem 0.2rem 0.3rem black;

  @media ${device.mobileM} {
    font-size: 5rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: 3rem;
  width: 100%;

  @media ${device.mobileL} {
    width: ${mobileLWidth};
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Landing = () => {
  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const handlePlay = React.useCallback(() => {
    history.push(user ? ROUTES.GAME : ROUTES.LOGIN);
  }, []);

  return (
    <Main>
      <Header>
        <Img src={farmer} alt="farmer" />
        <H1>Lazy-Farmer</H1>
      </Header>
      <StyledButton
        variant="contained"
        color="primary"
        size="large"
        startIcon={<FaPlay />}
        onClick={handlePlay}
      >
        Play!
      </StyledButton>
    </Main>
  );
};

export default Landing;
