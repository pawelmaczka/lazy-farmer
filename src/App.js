import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'assets/fonts/Lato/LatoFont.css';

import GlobalStyle from 'styles/GlobalStyle';
import * as ROUTES from 'constants/routes';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path={ROUTES.LANDING}>
          hello world
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
