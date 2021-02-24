import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Routes />
      </Container>
    </>
  );
};

export default App;
