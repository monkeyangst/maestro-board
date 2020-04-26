import React from 'react';
import {Container} from 'react-bootstrap';
import GameBoard from './GameBoard';
import './App.css';

function App() {
  return (
    <Container className="App">
      <GameBoard />
    </Container>
  );
}

export default App;
