import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { StylesProvider } from '@material-ui/core/styles';

import { AuthProvider } from 'services/auth';
import PrivateRoute from 'components/PrivateRoute';
import GlobalStyle from 'styles/GlobalStyle';
import * as ROUTES from 'constants/routes';
import Login from 'routes/Login';
import Game from 'routes/Game';
import AuthLoadingState from 'components/AuthLoadingState';
import Landing from 'routes/Landing';
import Layout from 'components/Layout';
import MuiTheme from 'styles/MuiTheme';

function App() {
  return (
    <AuthProvider>
      <Normalize />
      <GlobalStyle />
      <StylesProvider injectFirst>
        <MuiTheme>
          <Router>
            <Layout>
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
            </Layout>
          </Router>
        </MuiTheme>
      </StylesProvider>
    </AuthProvider>
  );
}

export default App;
