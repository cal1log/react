import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Greet2, Greet3 } from './components/Greet2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet></Greet>
        <Greet2 />
        <Greet3 />
      </div>
    );
  }
}

export default App;
