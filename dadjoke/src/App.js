import React from 'react';
import Joke from './Joke';
import { Container, Navbar } from 'react-bootstrap';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Dad Jokes</Navbar.Brand>
        </Container>
      </Navbar>
      <Joke/>
    </div>
  );
}

export default App;