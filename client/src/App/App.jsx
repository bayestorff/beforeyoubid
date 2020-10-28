import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Application, Container } from './styles';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <>
      <Application>
        <Container>
          <Dashboard></Dashboard>
        </Container>
      </Application>
      <GlobalStyle />
    </>
  );
};

export default hot(App);
