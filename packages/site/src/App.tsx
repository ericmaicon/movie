import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { HomeContainer } from '~/containers';
import theme from '~/themes/theme.json';

const { API_URL, API_KEY } = process.env;

declare global {
  interface Window {
    API_URL: string;
    API_KEY: string;
  }
}

window.API_URL = API_URL!;
window.API_KEY = API_KEY!;

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
