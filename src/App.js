import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { StylesProvider } from '@material-ui/core/styles';

import 'assets/fonts/Lato/LatoFont.css';

import { AuthProvider } from 'services/auth';
import PrivateRoute from 'components/PrivateRoute';
import GlobalStyle from 'styles/GlobalStyle';
import * as ROUTES from 'constants/routes';
import Login from 'routes/Login';
import Game from 'routes/Game';
import AuthLoadingState from 'components/AuthLoadingState';
import Landing from 'routes/Landing';

function App() {
  return (
    <AuthProvider>
      <Normalize />
      <GlobalStyle />
      <StylesProvider injectFirst>
        <Router>
          <Switch>
            <Route exact path={ROUTES.LANDING}>
              <Landing />
            </Route>
            <AuthLoadingState>
              <Route path={ROUTES.LOGIN}>
                <Login />
              </Route>
              <PrivateRoute path={ROUTES.GAME}>
                <Game />
              </PrivateRoute>
            </AuthLoadingState>
            <Route path="*">
              <Redirect to={ROUTES.LANDING} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </AuthProvider>
  );
}

export default App;
