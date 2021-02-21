import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { HomeContainer } from '~/containers';
import theme from '~/themes/theme.json';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
